<template>
  <div
    :class="['flex flex-col gap-2 p-4 rounded-md', bgColorClass]"
  >
    <div class="space-y-2">
      <component
        :is="stat.icon"
        size="36px"
        :class="textColorClass"
      />
      <span class="font-medium text-gray-600">{{ stat.label }}</span>
    </div>
    <h3 class="font-bold text-3xl text-end">
      <span class="text-xl">
        {{ stat.label === 'Payments' ? 'INR' : '' }}
      </span>
      {{ stat.value.toLocaleString() }}
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RiErrorWarningLine } from '@remixicon/vue';

interface Stat {
  color: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  value: number;
}

export default defineComponent({
  name: 'StatCard',
  components: { RiErrorWarningLine },
  props: {
    stat: {
      type: Object as PropType<Stat>,
      required: true,
      default: () => ({
        color: 'primary',
        label: '',
        icon: RiErrorWarningLine,
        value: 0,
      }),
    },
  },
  setup(props) {
    const colorClasses = {
      primary: { bg: 'bg-primary/20', text: 'text-primary' },
      secondary: { bg: 'bg-secondary/20', text: 'text-secondary' },
      skyblue: { bg: 'bg-skyblue/20', text: 'text-skyblue' },
      lightpink: { bg: 'bg-lightpink/20', text: 'text-lightpink' },
      gradient: { bg: 'bg-gradient', text: 'text-white' },
    };

    // eslint-disable-next-line max-len
    const classes = colorClasses[props.stat.color as keyof typeof colorClasses] || colorClasses.primary;

    return {
      bgColorClass: classes.bg,
      textColorClass: classes.text,
    };
  },
});
</script>
