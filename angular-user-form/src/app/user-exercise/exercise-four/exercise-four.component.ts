import { Component, OnInit } from '@angular/core';

declare var AMap: any;
declare var AMapUI: any;
@Component({
  selector: 'app-exercise-four',
  templateUrl: './exercise-four.component.html',
  styleUrls: ['./exercise-four.component.css']
})
export class ExerciseFourComponent implements OnInit {

  constructor() { }
  public placeSearch = new AMap.PlaceSearch();
  public infoWindow = new AMap.AdvancedInfoWindow({});

  ngOnInit() {
   const userData = localStorage.getItem('userData');
   const userD = JSON.parse(userData);
    console.log(userData)
    const map = new AMap.Map('container', {
      resizeEnable: true,
      enableHighAccuracy: true,
      timeout: 10000,
      zoom: 20,
      center: [123.447791, 41.722535],
      isHotspot: true    });
    map.on('hotspotclick', (result) => {this.placeSearch.getDetails(result.id,
      (status, result) =>  {        if (status === 'complete' && result.info === 'OK') {
        placeSearch_CallBack(result);
      }
      });
    })
    const placeSearch_CallBack = (data) => {
      const poiArr = data.poiList.pois;
      const location = poiArr[0].location;
      this.infoWindow.setContent(createContent(poiArr[0]));
      this.infoWindow.open(map, location);
    }
    const createContent = (poi) => {
      const s = [];
      s.push('<div class="info-title">' + poi.name + '</div><div class="info-content">' + '地址：' + poi.address);
      s.push('电话：' + poi.tel);
      s.push('类型：' + poi.type);
      s.push('<div>');
      return s.join('');
    }
    AMapUI.loadUI(['overlay/SimpleInfoWindow'], (SimpleInfoWindow) => {
      const marker = new AMap.Marker({
        map: map,
        zIndex: 9999999,
        position: map.getCenter(123.447791, 41.722535)      });
       const infoWindow = new SimpleInfoWindow({
         infoTitle: 'personal details' ,
        infoBody: 'Name:' + userD.name + '<br>' +
        'Age:' + userD.age + '<br>' +
        'Sex:' + userD.sex + '<br>' +
        'Phone:' + userD.phone + '<br>' +
        'Address:' + userD.adress + '<br>',
        offset: new AMap.Pixel(0, -31) });
      const openInfoWin = () => {
        infoWindow.open(map, marker.getPosition());
      }
      AMap.event.addListener(marker, 'click', () => {
        openInfoWin();
      });
    });
  }
}
