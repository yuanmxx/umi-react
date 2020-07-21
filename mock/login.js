const name = ["超级管理员",'普通员工']
module.exports = {
    'POST /api/login': (req, res) => {
        const { username, password } = req.body;
        if (password === '111' && name.find((item) => item === username )) {
            setTimeout(() => {
                res.json({
                    msg: '请求处理成功',
                    code: '200',
                    data:{username, password} ,
                });
            }, 1000);
        } else {
            setTimeout(() => {
                res.json({
                    msg: '密码或者用户名错误',
                    code: '500',
                });
            }, 1000);
        }
    },

    'POST /api/logout': (req, res) => {
        setTimeout(() => {
            res.json({
                msg: '请求处理成功',
                code: '200',
            });
        }, 1000);
    },
};
