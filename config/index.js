export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx939684d4cd15030e",
    // 公众号APP_SECRET
    APP_SECRET: "dc5428c97d553c78c58ffd0f59ed65f5",
    // 模板消息id
    TEMPLATE_ID: "7J2lM4kTFNBOZU2_VZV8YD98Vo30u1hOsdwfwdArgKU",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["oOkEj6YEkuaFZwWY1GN6EnPtkPGA", "oOkEj6ZEh5Ihnq01jIFmXRv9yrig"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "贵州",
    // 所在城市
    CITY: "贵阳",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS: [
      {"name": "周宝", "year": "2001", "date": "09-24"},
      {"name": "木宝", "year": "1996", "date": "10-29"},
    ],

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2022-07-08",
    // 结婚纪念日
    MARRY_DATE: "2022-07-08",


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: " 漫画"


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
