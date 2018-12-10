var contact = {
    map:function () {
        var map1=new BMap.Map("allmap");//1、创建地图实例
        var point = new BMap.Point(114.5544687045,30.7204631310);//2、创建点坐标
        map1.centerAndZoom(point,17);//3、初始化地图，设置中心点坐标和地图级别
        //启用滚动缩放
        map1.enableScrollWheelZoom(true);
        //添加导航控件
        map1.addControl(new BMap.NavigationControl());
        //添加缩放控件
        map1.addControl(new BMap.ScaleControl());
        //添加概览图控件
        map1.addControl(new BMap.OverviewMapControl());
        //添加地图类型控件
        map1.addControl(new BMap.MapTypeControl());
        //添加地图上的覆盖物 -- 标记
        var mk=new BMap.Marker(point);
        mk.setAnimation(BMAP_ANIMATION_BOUNCE);
        map1.addOverlay(mk);
    }
}
contact.map();
