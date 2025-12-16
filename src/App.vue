<script setup lang="ts">
import CalcButton from "./components/CalcButton.vue";
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
    { value: ".", variant: "number" },
  ],
] as const;

// Handler for button clicks
const handleButtonClick = (value: string) => {
  console.log("Button clicked:", value);
  // We'll add calculator logic here next
};
</script>

<template>
  <div class="hello">
    <h1>Hello!</h1>
  </div>
  <div class="calculator">
    <div class="display">0</div>

    <div class="button-grid">
      <div
        v-for="(row, rowIndex) in buttonLayout"
        :key="rowIndex"
        class="button-row"
      >
        <CalcButton
          v-for="(button, colIndex) in row"
          :key="`${rowIndex}-${colIndex}`"
          :value="button.value"
          :variant="button.variant"
          @click="handleButtonClick"
        />
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

p {
  font-size: 1.25rem;
  color: #666;
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

/* Make the last row (0 and .) span appropriately */
.button-row:last-child {
  grid-template-columns: 2fr 1fr 1fr;
}
</style>
