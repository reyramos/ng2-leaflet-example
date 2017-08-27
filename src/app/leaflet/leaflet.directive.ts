import { AfterContentInit, Component, Directive, ElementRef, OnInit, Renderer, Renderer2 } from '@angular/core';
import 'leaflet';
import 'leaflet.markercluster';

import { ADDRESS } from './realworld.388';

declare const L: any;

@Directive({
  selector: '[leaflet]'
})
export class LeafletDirective implements OnInit, AfterContentInit {

  private Element;

  constructor(el: ElementRef, private renderer: Renderer2) {
    this.Element = el.nativeElement;
  }

  ngAfterContentInit(): void {

    const map = L.map(this.Element).setView([ -37.82, 175.24 ], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
     maxZoom    : 18,
     id         : 'mapbox.streets',
     accessToken: 'pk.eyJ1IjoicmVkcm9nZXIiLCJhIjoiY2o2c2tqbjIxMDIzaTJxbnpjZHBxdDEyZSJ9.E75NG-gitdKewtIZ9gHZ9g'
     }).addTo(map);


    // const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     maxZoom    : 18,
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
    //   }),
    //   latlng = L.latLng(-37.82, 175.24);
    //
    // const map = L.map(this.Element, {center: latlng, zoom: 13, layers: [ tiles ]});


    const markers = L.markerClusterGroup();

    ADDRESS.forEach((a: any) => {
      const title: any = a[ 2 ];
      const marker = L.marker(new L.LatLng(a[ 0 ], a[ 1 ]), {title});
      marker.bindPopup(title);
      markers.addLayer(marker);
    });

    map.addLayer(markers);

  }

  ngOnInit(): void {
  }

}
