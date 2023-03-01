
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/front/IndexPage.vue'),
        meta: {
          title: 'Ocean',
          login: false,
          admin: false
        }
      },

      {
        path: '/register',
        name: 'register',
        component: () => import('pages/front/RegisterPage.vue'),
        meta: {
          title: 'Ocean | 註冊',
          login: false,
          admin: false
        }
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('pages/front/LoginPage.vue'),
        meta: {
          title: 'Ocean | 登入',
          login: false,
          admin: false
        }
      },
      {
        path: 'products/:id',
        name: 'products',
        component: () => import('src/pages/front/ProductPage.vue'),
        meta: {
          title: 'Ocean | 商品',
          login: false,
          admin: false
        }
      },
      {
        path: 'latest/:id',
        name: 'infolatest',
        component: () => import('src/pages/front/InLatestPage.vue'),
        meta: {
          title: 'Ocean | 最新消息',
          login: false,
          admin: false
        }
      },
      {
        path: 'fish/:id',
        name: 'infoFish',
        component: () => import('src/pages/front/InfishPage.vue'),
        meta: {
          title: 'Ocean | 魚種圖鑑',
          login: false,
          admin: false
        }
      },
      {
        path: '/article',
        name: 'article',
        component: () => import('pages/front/ArticlePage.vue'),
        meta: {
          title: 'Ocean | 文章討論',
          login: false,
          admin: false
        }
      },
      {
        path: '/fish',
        name: 'fish',
        component: () => import('pages/front/FishPage.vue'),
        meta: {
          title: 'Ocean | 魚種圖鑑',
          login: false,
          admin: false
        }
      },
      {
        path: '/clownfish',
        name: 'clownfish',
        component: () => import('pages/front/fishBook/ClownFish.vue'),
        meta: {
          title: 'Ocean | 魚種圖鑑 | 小丑魚',
          login: false,
          admin: false
        }
      },
      {
        path: '/tangfish',
        name: 'tangfish',
        component: () => import('pages/front/fishBook/TangFish.vue'),
        meta: {
          title: 'Ocean | 魚種圖鑑 | 倒吊魚',
          login: false,
          admin: false
        }
      },
      {
        path: '/damselfish',
        name: 'damselfish',
        component: () => import('pages/front/fishBook/DamselFish.vue'),
        meta: {
          title: 'Ocean | 魚種圖鑑 | 雀鯛',
          login: false,
          admin: false
        }
      },
      {
        path: '/sangelfish',
        name: 'sangelfish',
        component: () => import('pages/front/fishBook/SAngelFish.vue'),
        meta: {
          title: 'Ocean | 魚種圖鑑 | 小型神仙',
          login: false,
          admin: false
        }
      },
      {
        path: '/angelfish',
        name: 'angelfish',
        component: () => import('pages/front/fishBook/AngelFish.vue'),
        meta: {
          title: 'Ocean | 魚種圖鑑 | 大型神仙',
          login: false,
          admin: false
        }
      },
      {
        path: '/butterflyfish',
        name: 'butterflyfish',
        component: () => import('pages/front/fishBook/ButterflyFish.vue'),
        meta: {
          title: 'Ocean | 魚種圖鑑 | 蝶魚',
          login: false,
          admin: false
        }
      },
      {
        path: '/triggerfish',
        name: 'triggerfish',
        component: () => import('pages/front/fishBook/TriggerFish.vue'),
        meta: {
          title: 'Ocean | 魚種圖鑑 | 砲彈魚',
          login: false,
          admin: false
        }
      },
      {
        path: '/boxfish',
        name: 'boxfish',
        component: () => import('pages/front/fishBook/BoxFish.vue'),
        meta: {
          title: 'Ocean | 魚種圖鑑 | 箱魨',
          login: false,
          admin: false
        }
      },
      {
        path: '/pufferfish',
        name: 'pufferfish',
        component: () => import('pages/front/fishBook/PufferFish.vue'),
        meta: {
          title: 'Ocean | 魚種圖鑑 | 魨魚',
          login: false,
          admin: false
        }
      },
      {
        path: '/frogfish',
        name: 'frogfish',
        component: () => import('pages/front/fishBook/FrogFish.vue'),
        meta: {
          title: 'Ocean | 魚種圖鑑 | 青蛙',
          login: false,
          admin: false
        }
      },
      {
        path: '/wrassefish',
        name: 'wrassefish',
        component: () => import('pages/front/fishBook/WrasseFish.vue'),
        meta: {
          title: 'Ocean | 魚種圖鑑 | 隆頭魚',
          login: false,
          admin: false
        }
      },
      {
        path: '/pseudochromisfish',
        name: 'pseudochromisfish',
        component: () => import('pages/front/fishBook/PseudochromisFish.vue'),
        meta: {
          title: 'Ocean | 魚種圖鑑 | 草莓魚',
          login: false,
          admin: false
        }
      },
      {
        path: '/anthiasfish',
        name: 'anthiasfish',
        component: () => import('pages/front/fishBook/AnthiasFish.vue'),
        meta: {
          title: 'Ocean | 魚種圖鑑 | 海金魚',
          login: false,
          admin: false
        }
      },
      {
        path: '/gobyfish',
        name: 'gobyfish',
        component: () => import('pages/front/fishBook/GobyFish.vue'),
        meta: {
          title: 'Ocean | 魚種圖鑑 | 蝦虎',
          login: false,
          admin: false
        }
      },
      {
        path: '/latest',
        name: 'latest',
        component: () => import('src/pages/front/LatestPage.vue'),
        meta: {
          title: 'Ocean | 最新消息',
          login: false,
          admin: false
        }
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('src/pages/front/ContactPage.vue'),
        meta: {
          title: 'Ocean | 聯絡我們',
          login: false,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'admin-home',
        component: () => import('pages/admin/HomePage.vue'),
        meta: {
          title: 'Ocean | 管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'article',
        name: 'admin-article',
        component: () => import('pages/admin/ArticlePage.vue'),
        meta: {
          title: 'Ocean | 文章討論管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'fish',
        name: 'admin-fish',
        component: () => import('pages/admin/FishPage.vue'),
        meta: {
          title: 'Ocean | 魚種圖鑑管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'latests',
        name: 'admin-news',
        component: () => import('src/pages/admin/LatestsPage.vue'),
        meta: {
          title: 'Ocean | 最新消息管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'member',
        name: 'admin-member',
        component: () => import('pages/admin/MemberPage.vue'),
        meta: {
          title: 'Ocean | 會員資料管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'contact',
        name: 'admin-contact',
        component: () => import('pages/admin/ContactPage.vue'),
        meta: {
          title: 'Ocean | 聯絡訊息查看',
          login: true,
          admin: true
        }
      }

    ]
  },
  {
    path: '/member',
    component: () => import('layouts/MemberLayout.vue'),
    children: [
      {
        path: '',
        name: 'member-home',
        component: () => import('pages/member/HomePage.vue'),
        meta: {
          title: 'Ocean | 會員專區',
          login: true,
          admin: false
        }
      },
      {
        path: 'mine',
        name: 'member-mine',
        component: () => import('pages/member/MinePage.vue'),
        meta: {
          title: 'Ocean | 我的文章',
          login: true,
          admin: false
        }
      },
      {
        path: 'like',
        name: 'member-like',
        component: () => import('pages/member/LikePage.vue'),
        meta: {
          title: 'Ocean | 最愛文章',
          login: true,
          admin: false
        }
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: {
      title: 'Ocean | 404',
      login: false,
      admin: false
    }
  }
]

export default routes
