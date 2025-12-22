<script setup lang="ts">
const props = defineProps<{
  value: string;
  variant: "number" | "operator" | "equals" | "clear";
}>();

const emit = defineEmits<{
  click: [value: string];
}>();

const handleClick = () => {
  emit("click", props.value);
};
</script>

<template>
  <h1>test</h1>
  <button :class="['calc-button', props.variant]" @click="handleClick">
    {{ props.value }}
  </button>
</template>

<style scoped>
.calc-button {
  /* Base button styles */
  padding: 1.5rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;

  /* Remove default button styling */
  background: none;
  outline: none;
}

.calc-button:hover {
  transform: scale(1.05);
}

.calc-button:active {
  transform: scale(0.95);
}

/* Number buttons - default style */
.calc-button.number {
  background-color: #f0f0f0;
  color: #333;
}

.calc-button.number:hover {
  background-color: #e0e0e0;
}

/* Operator buttons */
.calc-button.operator {
  background-color: #ff9500;
  color: #000;
}

.calc-button.operator:hover {
  background-color: #ff8000;
}

/* Equals button */
.calc-button.equals {
  background-color: #4caf50;
  color: #000;
}

.calc-button.equals:hover {
  background-color: #45a049;
}

/* Clear button */
.calc-button.clear {
  background-color: #f44336;
  color: #000;
}

.calc-button.clear:hover {
  background-color: #da190b;
}
</style>
