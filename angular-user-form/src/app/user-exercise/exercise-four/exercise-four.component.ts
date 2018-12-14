import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/internal/operators';

declare var AMap: any;
declare var AMapUI: any;
@Component({
  selector: 'app-exercise-four',
  templateUrl: './exercise-four.component.html',
  styleUrls: ['./exercise-four.component.css']
})
export class ExerciseFourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getMap ();
    // this.addMark();
  }

  getMap() {
    let map = new AMap.Map('container', {
      resizeEnable: true,
      center: [123.45428, 41.728505],
      zoom: 13,
      isHotspot: true,
      enableHighAccuracy: true,
    });
    AMapUI.loadUI(['overlay/SimpleInfoWindow'] , function (SimpleInfoWindow) {
      const userData = localStorage.getItem('userData');
      const userD = JSON.parse(userData);
      const marker = new AMap.Marker({
        map: map,
        zIndex: 9999,
        position: map.getCenter(123.447791, 41.722535)
      });
      const infoWindow = new SimpleInfoWindow({
        infoTitle: 'personal details' ,
        infoBody: 'Name:' + userD.name + '<br>' +
          'Age:' + userD.age + '<br>' +
          'Sex:' + userD.sex + '<br>' +
          'Phone:' + userD.phone + '<br>' +
          'Address:' + userD.adress + '<br>',
        offset : new AMap.Pixel(0, -31)
      });
      function openInfoWin() {
        infoWindow.open(map, marker.getPosition());
      }
      AMap.event.addListener(marker, 'click', function () {
        openInfoWin();
      });
    });
    const placeSearch = new AMap.PlaceSearch();  // 构造地点查询类
    const infoWindow = new AMap.AdvancedInfoWindow({});
    map.on('hotspotclick', function(result) {
      placeSearch.getDetails(result.id, function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
          placeSearch_CallBack(result);
        }
      });
    });
    function placeSearch_CallBack(data) { // infoWindow.open(map, result.lnglat);
      const poiArr = data.poiList.pois;
      const location = poiArr[0].location;
      infoWindow.setContent(createContent(poiArr[0]));
      infoWindow.open(map, location);
    }
    function createContent(poi) {  // 信息窗体内容
      let s = [];
      s.push('<div class="info-title">' + poi.name + '</div><div class= " info-content " >' + '地址：' + poi.address);
      s.push('电话：' + poi.tel);
      s.push('类型：' + poi.type);
     // s.push('<div>');
      return s.join('<br>');
    }
  }
}
