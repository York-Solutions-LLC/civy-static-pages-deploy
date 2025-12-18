<script setup lang="ts">
import CalcButton from "./components/CalcButton.vue";
import { ref } from "vue";
import { calculate, type Operator } from "./utils/calculate";

const buttonLayout = [
  [
    { value: "C", variant: "clear" },
    { value: "÷", variant: "operator" },
    { value: "x", variant: "operator" },
    { value: "←", variant: "operator" },
  ],
  [
    { value: "7", variant: "number" },
    { value: "8", variant: "number" },
    { value: "9", variant: "number" },
    { value: "-", variant: "operator" },
  ],
  [
    { value: "4", variant: "number" },
    { value: "5", variant: "number" },
    { value: "6", variant: "number" },
    { value: "+", variant: "operator" },
  ],
  [
    { value: "1", variant: "number" },
    { value: "2", variant: "number" },
    { value: "3", variant: "number" },
    { value: "=", variant: "equals" },
  ],
  [
    { value: "0", variant: "number" },
  ],
] as const;

const display = ref("0");
const previousValue = ref<string | null>(null);
const currentOperator = ref<Operator | null>(null);
const waitingForNewValue = ref(false);

const isNumber = (value: string) =>
  /^\d$/.test(value);

const isOperator = (value: string): value is Operator =>
  value === "+" || value === "-" || value === "x" || value === "÷";


const handleNumber = (digit: string) => {
  if (waitingForNewValue.value) {
    display.value = digit;
    waitingForNewValue.value = false;
    return;
  }

  display.value =
    display.value === "0"
      ? digit
      : display.value + digit;
};

const handleOperator = (nextOperator: Operator) => {
  const current = Number.parseInt(display.value, 10);

  if (previousValue.value !== null && currentOperator.value) {
    const result = calculate(
      Number.parseInt(previousValue.value, 10),
      current,
      currentOperator.value
    );
    display.value = String(result);
    previousValue.value = display.value;
  } else {
    previousValue.value = display.value;
  }

  currentOperator.value = nextOperator;
  waitingForNewValue.value = true;
};

const handleClear = () => {
  display.value = "0";
  previousValue.value = null;
  currentOperator.value = null;
  waitingForNewValue.value = false;
};

const handleBackspace = () => {
  if (display.value.length === 1) {
    display.value = "0";
  } else {
    display.value = display.value.slice(0, -1);
  }
};

const handleEquals = () => {
  if (previousValue.value === null || currentOperator.value === null) {
    return; // Nothing to calculate
  }

  const result = calculate(
    Number.parseInt(previousValue.value),
    Number.parseInt(display.value),
    currentOperator.value
  );

  display.value = String(result);
  previousValue.value = null;
  currentOperator.value = null;
  waitingForNewValue.value = true;
};


// Handler for button clicks
const handleButtonClick = (value: string) => {
  if (isNumber(value)) handleNumber(value);
  else if (isOperator(value)) handleOperator(value);
  else if (value === "C") handleClear();
  else if (value === "=") handleEquals();
  else if (value === "←") handleBackspace();
};

</script>

<template>
  <div class="hello">
    <h1>Hello!</h1>
  </div>
  <div class="calculator">
    <div class="display">{{ display }}</div>

    <div class="button-grid">
      <div v-for="(row, rowIndex) in buttonLayout" :key="rowIndex" class="button-row">
        <CalcButton v-for="(button, colIndex) in row" :key="`${rowIndex}-${colIndex}`" :value="button.value"
          :variant="button.variant" @click="handleButtonClick" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hello {
  display: flex;

  align-items: center;
  justify-content: center;

  text-align: center;
}

h1 {
  font-size: 3rem;
  color: #42b983;
  margin-bottom: 1rem;
}

.calculator {
  max-width: 400px;
  padding: 1.5rem;
  background: #222;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.display {
  background: #1a1a1a;
  color: white;
  font-size: 2.5rem;
  padding: 1.5rem;
  text-align: right;
  border-radius: 8px;
  margin-bottom: 1rem;
  min-height: 60px;
  word-break: break-all;
}

.button-grid {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.button-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

/* Make the last row span appropriately */
.button-row:last-child {
  grid-template-columns: 2fr 1fr 1fr;
}
</style>
