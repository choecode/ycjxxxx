const Controller = require('egg').Controller;


class ycjxController extends Controller {

    async index() {
        const { ctx } = this;
        await ctx.render('index.html', { name: 'czc' });
    }

    async login() {
        const { ctx } = this;
        const { cardNo } = ctx.request.body;
        const result = await ctx.curl("https://yun.yicjx.com/wei-xin/api/phone/student/getStudentClassHours", {
            method: "POST",
            dataType: "json",
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
            data: {
                cardNo
            }
        });

        if (result.data.success === true) {
            ctx.body = {
                code: 0,
                msg: "",
                data: result.data.data
            }
        } else {
            ctx.body = {
                code: -1,
                msg: "出错了，请检查证件号或者稍后重试",
                data: ""
            }
        }
    }

}


module.exports = ycjxController;
