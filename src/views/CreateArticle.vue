<template>
  <div>
    Create Article form
    <McvArticleForm
      :initialValues="initialValues"
      :errors="validationErrors"
      :isSubmiting="isSubmiting"
      @articleSubmit="onSubmit"
    />
  </div>
</template>

<script>
import McvArticleForm from '@/components/ArticleForm'
export default {
  name: 'McvCreateArticle',
  components: {
    McvArticleForm
  },
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: []
      },
      validationErrors: null,
      isSubmiting: false
    }
  },
  methods: {
    onSubmit(data) {
      console.log('submit create articl', data)
    }
  }
}
</script>
