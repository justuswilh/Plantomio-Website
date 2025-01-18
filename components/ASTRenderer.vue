<script setup>
defineProps({
  nodes: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div>
    <component
      :is="node.tag || 'div'"
      v-for="(node, index) in nodes"
      :key="index"
      v-bind="node.props"
    >
      <!-- Wenn der Knoten Kinder hat, rufe rekursiv ASTRenderer auf -->
      <template v-if="node.children && node.children.length">
        <ASTRenderer :nodes="node.children" />
      </template>
      <!-- Wenn der Knoten einen Textwert hat, zeige ihn an -->
      <template v-else-if="node.value">
        {{ node.value }}
      </template>
    </component>
  </div>
</template>
