<template>
  <div id="Admin">
    <div class="content justify-center" align="center">

      <div class="top col-12 row">
        <div class="col-8 ">
          <h4 class="title">文章討論管理</h4>
        </div>
        <div class="new col-4 q-pa-md q-gutter-sm">
          <q-btn label="新增商品" color="primary" @click="openDialog(-1)" />
        </div>
      </div>

      <!-- 分類組 ------------------------------------------------>
      <div class="q-pa-md q-gutter-sm col-12" align="center">
        <q-btn v-for="fish,index in articleCategory" outline rounded color="primary" :key="index" :label="fish" @click="fishActive=fish" />
      </div>

      <!-- 表格 ---------------------------------------------------->
        <table :fishActive="fishActive">
          <thead>
            <tr align="left">
              <th>圖片</th>
              <th>標題</th>
              <th>日期</th>
              <th>管理</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, idx) in ac" :key="product._id">
              <td class="img">
                <img :src="product.image"  :width="100">
              </td>
              <td class="name">{{ product.name }}</td>
              <td class="time">{{ product.time }}</td>
              <td class="btn">
                <q-btn round color="primary" icon="edit" @click="openDialog(idx)"></q-btn>
                <q-btn round color="red" icon="delete" @click="deleteProduct(product._id)"></q-btn>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- 彈跳視窗 ------------------------------------------------>
        <q-dialog v-model="form.dialog" persistent>

          <q-card style="width: 100%;">
            <q-form  @submit="submit">

            <q-card-section>
              <!-- 標題 -->
              <div class="text-h6">{{ form._id.length > 0 ? '編輯商品' : '新增商品' }}</div>
              <!-- 文章 -->
              <q-input
                filled
                v-model="form.name"
                label="文章"
                hint=""
                lazy-rules
                :rules="[rules.required]"
              />
              <!-- 日期 -->
              <q-input
                filled
                v-model="form.time"
                label="日期"
                lazy-rules
                :rules="[rules.required]"
              />
              <!-- 說明 -->
              <q-input
                filled
                v-model="form.description"
                autogrow
                label="說明"
                :rules="[rules.required]"
              />

              <!-- 分類 -->
              <q-select filled v-model="form.category" :options="categories" label="分類" :rules="[rules.required]" />

              <!-- 上架 -->
              <q-checkbox v-model="form.sell" label="上架" />

              <!-- 照片 -->
              <q-file outlined v-model="form.image">
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>

            </q-card-section>

              <q-card-actions align="center" class="text-primary">
                <q-btn :disabled="form.loading" type="submit" color="primary" label="送出"/>
                <q-btn :disabled="form.loading" @click="form.dialog = false" label="取消" color="primary" flat class="q-ml-sm" />
              </q-card-actions>

            </q-form>
            </q-card>

        </q-dialog>

    </div>
  </div>
</template>

<script setup>
import { apiAuth } from '../../../plugins/axios'
import { ref, reactive, computed } from 'vue'
import Swal from 'sweetalert2'

const categories = ['海水魚類', '珊瑚軟體', '硬體設備', '二手分享']

const rules = {
  required (value) {
    return !!value || '欄位必填'
  }
}

const products = reactive([])
const form = reactive({
  _id: '',
  name: '',
  time: '',
  description: '',
  image: undefined,
  sell: false,
  category: '',

  loading: false,
  dialog: false,
  idx: -1
})

const dt = new Date()
const day = `${dt.getFullYear()}年${dt.getMonth() + 1}月${dt.getDate()}日`

const openDialog = (idx) => {
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.time = day
    form.description = ''
    form.image = undefined
    form.sell = false
    form.category = ''

    form.loading = false
    form.idx = -1
  } else {
    form._id = products[idx]._id
    form.name = products[idx].name
    form.time = products[idx].time
    form.description = products[idx].description
    form.image = undefined
    form.sell = products[idx].sell
    form.category = products[idx].category

    form.loading = false
    form.idx = idx
  }
  form.dialog = true
}

const submit = async () => {
  form.loading = true

  // fd.append(key, value)
  const fd = new FormData()
  fd.append('name', form.name)
  fd.append('time', form.time)
  fd.append('description', form.description)
  fd.append('image', form.image)
  fd.append('sell', form.sell)
  fd.append('category', form.category)

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/products', fd)
      products.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
      products[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }

  form.loading = false
}
// 刪除 ------
const deleteProduct = async (id) => {
  try {
    await apiAuth.delete(`/products/${id}`)
    const index = products.findIndex((item) => item._id === id)
    products.splice(index, 1)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
}
// 分類篩選 -------
const articleCategory = ['所有文章', '海水魚類', '珊瑚軟體', '硬體設備', '二手分享']
const fishActive = ref(articleCategory[0])

const ac = computed(() => {
  return products.filter((fish1) => {
    if (fishActive.value === articleCategory[0]) {
      return fish1
    } else {
      return fish1.category === fishActive.value
    }
  })
});

(async () => {
  try {
    const { data } = await apiAuth.get('/products/all')
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()

</script>

<!-- style ----------------------------------------------------------->
<style lang="scss" scoped>
.swal2-container{
  z-index: 6100;
}

#Admin{
  background: rgb(15,85,165);
  height: 94vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .content{
    background: #eee;
    border-radius: 30px;
    height: 97%;
    width: 98%;
    overflow: auto;
    position: relative;
    .top{
      max-width: 800px;
      height: 50px;
      line-height: 50px;
      margin-top: 50px;
      h4{
        margin: 0;
        text-align: left;
        padding-left: 10px;
        margin-left: 20px;
        border-left: 5px solid rgb(15,85,165);
      }
      .new{
        padding: 0;
        text-align: right;
      }
    }

    table{
      border-collapse:collapse;
      max-width: 800px;
      th{
        background: rgb(15,85,165);
        height: 30px;
        color: white;
        padding: 0 10px;
        border-left: 1px solid white;
      }
      th:nth-child(4){
        text-align: center;
      }
      tr:nth-child(even){
        background-color:white;
      }
      .name{
        width: 35%;
        padding: 10px;
      }
      .time{
        width: 20%;
      }
      .btn{
        width: 15%;
        text-align: center;
        .q-btn{
          margin: 5px;
        }
      }
      .img{
        width: 30%;
        img{
          width: 100%;
          height: 100%;
        }
      }

    }
  }
}

@media (min-width:1007px) {
  #Admin{
    justify-content: flex-start;
    justify-content: center;
}
}
</style>
