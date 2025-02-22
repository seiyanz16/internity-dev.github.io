<script setup lang="ts">
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ref, onMounted } from 'vue'

const axios = useNuxtApp().$axios as NuxtAxiosInstance

const faqItems = ref<any[]>([])
const searchQuery = ref('')

const fetchFaqItems = async () => {
  try {
    const response = await axios.get('/faqs')
      faqItems.value = response.data.faqs

    console.log('Fetched FAQ items:', faqItems.value)
  } catch (error) {
    console.error('Error fetching FAQ items:', error)
  }
}

const filteredFaqItems = computed(() => {
  if (!searchQuery.value) {
    return faqItems.value
  }
  return faqItems.value.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

onMounted(() => {
  fetchFaqItems()
})
</script>

<template>
<div class="max-w-4xl mx-auto px-4 py-8 text-white">
    <h1 class="text-3xl font-semibold text-center mb-6">Frequently Asked Questions (FAQ)</h1>

    <div class="mb-6">
      <input
        v-model="searchQuery"
        type="text"
        class="w-full p-3 rounded-md border border-gray-300 text-black placeholder-gray-400"
        placeholder="Search FAQ..."
      />
    </div>
    
    <div class="space-y-4">
      <div v-for="(item, index) in filteredFaqItems" :key="index">
        <div class="border border-gray-300 rounded-md">
          <input
            type="checkbox"
            :id="'faq-' + index"
            class="peer hidden"
          />
          <label
            :for="'faq-' + index"
            class="block cursor-pointer px-4 py-3 bg-white text-xl font-semibold text-black hover:bg-gray-100 focus:outline-none peer-checked:bg-gray-100"
          >
            {{ item.question }}
          </label>
          <div class="px-4 py-3 text-black bg-white border-t border-gray-300 peer-checked:block hidden">
            <div v-html="item.answer" class="prose"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>