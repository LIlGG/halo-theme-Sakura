const home = {
  feature: {
    title: "聚焦"
  },
  discovery: "发现",
  video: {
    loading: "正在载入视频 ...",
    loading_error: "视频载入失败",
    statu_pause: "已暂停 ...",
    statu_waiting: "加载中 ...",
    statu_error: "视频播放错误"
  }
};
const postlist = {
  time: "发布于 {{ time, datetimeFormat }}",
  heat: "{{ visit }} 热度",
  comments: "{{ comment }} 条评论"
};
const post = {
  time: "发布于 {{ time, datetimeFormat }}",
  edit_time: "最后编辑于 {{ editTime, datetimeFormat }}",
  prev: "Previous Post",
  next: "Next Post",
  visits: "{{ visit }} 次阅读",
  reward: "赏",
  license: "知识共享署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0)",
  copyright_template_html: {
    info: "# 商业转载请联系作者获得授权，非商业转载请注明出处。<br>",
    license: "# 协议(License): $t(post.license)<br>",
    author: "# 作者(Author): {{ postAuthor }} <br>",
    url: "# 链接(URL): {{ postUrl }} <br>",
    source: "# 来源(Source): {{ siteName }} <br>"
  },
  word_count_toast: {
    content: "文章共 <b>{{ postWordCount }}</b> 字，阅读完预计需要 <b> {{ timeString }}</b>。{{ remind }}",
    remind: "文章篇幅适中，可以放心阅读。",
    remind_normal: "文章篇幅适中，可以放心阅读。",
    remind_medium: "文章篇幅较长，建议分段阅读。",
    remind_difficulty: "文章内容已经很陈旧了，也许不再适用！"
  },
  edit_time_toast: {
    content: "文章内容上次编辑时间于 <b>{{ sinceLastTime }}</b>。{{ remind }}",
    remind: "近期有所更新，请放心阅读！",
    remind_normal: "近期有所更新，请放心阅读！",
    remind_medium: "文章内容已经较久没有更新了，也许不再适用！",
    remind_difficulty: "文章内容已经很陈旧了，也许不再适用！"
  }
};
const page = {
  next: "下一页",
  theend: "没有更多文章了",
  archives: {
    title: "文章归档"
  },
  categories: {
    title: "文章分类",
    item_title: "分类：{{ title }}",
    radar_title: "$t(page.categories.title) 雷达图",
    radar_series_title: "$t(page.categories.title) 数量"
  },
  photos: {
    title: "图库",
    all: "全部"
  },
  links: {
    title: "友情链接"
  },
  moments: {
    title: "日志",
    loadmore: "加载更多...",
    empty: "博主太懒了，这里还什么都没有呢！！！",
    time: " {{ time, datetimeFormat }}"
  },
  search: {
    title: "关于“ {{ title }} ”的搜索结果",
    sresult: "搜索结果: "
  },
  tags: {
    title: "文章标签",
    item: {
      title: "标签：{{ title }}"
    }
  },
  none: {
    title: "没有找到任何东西！",
    search: "没有找到你想要的，看看其他的吧。",
    notfound: "我们似乎没有找到你想要的东西. 或许你可以搜索一下试试。"
  }
};
const comment = {
  number: "{{ comment }} 条评论",
  name: "Comments |"
};
const notfound = {
  title: "页面不存在 - {{ title }}",
  golast: "返回上一页",
  gohome: "返回主页",
  search: "别急，试试站内搜索？",
  search_2: "Don't worry, search in site?",
  searchinput: "Search..."
};
const user = {
  description: "我喜欢做的事就是不写个性签名",
  login: "登录",
  has_logged: "当前已登录",
  info: "个人资料",
  logout: "退出登录"
};
const icon_alt = {
  wechat: "微信公众号",
  sina: "微博",
  qq: "开始聊天？",
  qzone: "QQ 空间",
  github: "Github",
  lofter: "乐乎",
  bili: "哔哩哔哩",
  cloudmusic: "网易云音乐",
  twitter: "推特",
  facebook: "脸书",
  googleplus: "Google+",
  jianshu: "简书",
  zhihu: "知乎",
  csdn: "CSDN",
  telegram: "电报",
  email: "邮箱",
  stackoverflow: "Stack Overflow"
};
const share = {
  weibo: "分享至微博",
  qq: "分享至 QQ",
  wechat: {
    qcode_title: "微信扫一扫：分享",
    help_1: "微信里点“发现”，扫一下",
    help_2: "二维码便可将本文分享至朋友圈。"
  },
  douban: "分享至豆瓣",
  qzone: "分享至 QQ 空间",
  linkedin: "分享至领英"
};
const theme = {
  change_button_text: "切换主题 | SCHEME TOOL"
};
const common = {
  days: "{{ count }} 天",
  hours: "{{ count }} 小时",
  minutes: "{{ count }} 分钟",
  seconds: "{{ count }} 秒",
  events: {
    copy: "复制成功！<br>Copied to clipboard successfully!"
  },
  copy_code: "复制代码"
};
const zh = {
  home,
  postlist,
  post,
  page,
  comment,
  notfound,
  user,
  icon_alt,
  share,
  theme,
  common
};
export {
  comment,
  common,
  zh as default,
  home,
  icon_alt,
  notfound,
  page,
  post,
  postlist,
  share,
  theme,
  user
};
