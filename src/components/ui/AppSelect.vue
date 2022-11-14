<script>
  import ArrowDownIcon from '@/components/icon-svg/ArrowDownIcon.vue'
  import {mapGetters} from "vuex";

  export default {
    name: 'AppSelect',
    components: {
      ArrowDownIcon
    },
    props: {
      options: {
        type: Array,
        required: true
      },
      selectedValue: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
        selectIsActive: false,
        selectedOption: null
      }
    },
    computed: {
      ...mapGetters('user', ['getUsers']),
      optionSelected() {
        return this.selectedOption ? this.selectedOption : this.options[0]
      }
    },
    mounted() {
      this.selectedOption = this.selectedValue
    },
    methods: {
      selectOption(option) {
        this.selectedOption = option
        this.$emit('select-option', this.selectedOption)
      }
    }
  }
</script>

<template>
  <!-- TODO: create by position (To open up to where there is a place) -->
  <div :class="['select', { 'active': selectIsActive }]" @click="selectIsActive = !selectIsActive">
    <p class="select-title">
      <span>{{ optionSelected.name }}</span>
      <arrow-down-icon class="arrow-down _animation-rotate" width="15" height="15" />
    </p>
    <ul class="select-options">
      <li
        v-for="option in options"
        class="options-item"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </li>
    </ul>

  </div>
</template>

<style lang="scss" scoped>
  .arrow-down {
    transition: .3s;
  }
  .select {
    margin: 4px 0;
    padding: 12px 20px;
    border: 1px solid silver;
    border-radius: 4px;
    position: relative;

    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-options {
      position: absolute;
      background: #fff;
      width: calc(100% + 2px);
      left: -1px;
      top: 50px;
      border: 1px solid silver;
      opacity: 0;
      visibility: hidden;
      transition: .3s;

      li {
        padding: 8px 20px;
        list-style: none;
        cursor: pointer;

        &:hover {
          background: #9ec6ff;
        }
      }
    }

    &.active {
      .arrow-down {
        transform: rotate(180deg);
      }
      .select-options {
        opacity: 1;
        visibility: visible;
        top: calc(100% + 2px);
      }
    }
  }
</style>