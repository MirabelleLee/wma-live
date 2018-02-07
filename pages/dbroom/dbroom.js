//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        process: 'enterance', //enterance, room
        roomNo: ~~(Math.random() * 1000),
        pushStreamNo: 0,
        pullStreamNo: 0
    },
    onInputRoomNo: function (e) {
        this.setData({
            roomNo: e.detail.value
        })
    },
    onEnterRoom: function () {
        let roomNo = this.data.roomNo;
        let pushStreamNo = 0;
        let pullStreamNo = 0;
        wx.showToast({
            title: app.globalData.userInfo.nickName,
        })
        console.log("roomNo", roomNo)
        if (roomNo % 2 == 0) {
            pushStreamNo = 'rtmp://120.79.14.225:8905/live/userid=-838&roomid=2059&streamid=0'
            pullStreamNo = 'rtmp://120.79.14.225:8905/live/userid=-839&roomid=2059&streamid=0'
        } else {
            pushStreamNo = 'rtmp://120.79.14.225:8905/live/userid=-839&roomid=2059&streamid=0'
            pullStreamNo = 'rtmp://120.79.14.225:8905/live/userid=-838&roomid=2059&streamid=0'
        }
        this.setData({
            process: 'room',
            pushStreamNo: pushStreamNo,
            pullStreamNo: pullStreamNo
        });
    },
    onPush(e) {
        var code;
        if (e.detail) {
            code = e.detail.code;
        } else {
            code = e;
        }
    },
    onPull(e) {
        var code;
        if (e.detail) {
            code = e.detail.code;
        } else {
            code = e;
        }
    },
    onLoad: function () {

    },
    onShow: function () {

    },
    onHide: function () {
    },
    onUnload: function () {
    }
})
