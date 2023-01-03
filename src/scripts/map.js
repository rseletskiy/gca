import mapData from './map.json';

const L = require("leaflet");
const map = L.map("map").setView([51.280829329244085, 71.49341882804161], 4);
map.scrollWheelZoom.disable();
const mapPinIcon = L.icon({
  iconUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzMiAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF81MjBfMTM2MTEpIj4KPHBhdGggZD0iTTI0LjAwMDIgNC4wNTA3OEMyMi44MTk1IDIuOTc0OTIgMjEuNDM2IDIuMTQ1NTkgMTkuOTMwNyAxLjYxMTRDMTguNDI1NCAxLjA3NzIxIDE2LjgyODYgMC44NDg5MTEgMTUuMjMzOSAwLjkzOTg5NEMxMy42MzkzIDEuMDMwODggMTIuMDc4OCAxLjQzOTMxIDEwLjY0NCAyLjE0MTI0QzkuMjA5MjMgMi44NDMxNyA3LjkyOTAzIDMuODI0NDggNi44Nzg0NSA1LjAyNzY0QzUuODI3ODcgNi4yMzA3OSA1LjAyODA2IDcuNjMxNTcgNC41MjU5MSA5LjE0Nzg3QzQuMDIzNzYgMTAuNjY0MiAzLjgyOTM4IDEyLjI2NTQgMy45NTQxNSAxMy44NTc4QzQuMDc4OTMgMTUuNDUwMiA0LjUyMDM2IDE3LjAwMTcgNS4yNTI1NiAxOC40MjEzQzUuOTg0NzYgMTkuODQwOCA2Ljk5Mjk5IDIxLjA5OTkgOC4yMTgxNSAyMi4xMjQ4QzExLjAxOTEgMjQuNDUzNSAxMy4zNTk0IDI3LjI4NTkgMTUuMTE4MiAzMC40NzU4QzE1LjIwNDEgMzAuNjM0NiAxNS4zMzE1IDMwLjc2NzIgMTUuNDg2OCAzMC44NTk1QzE1LjY0MjEgMzAuOTUxOCAxNS44MTk1IDMxLjAwMDIgMTYuMDAwMiAzMC45OTk4QzE2LjE4MDcgMzAuOTk5NyAxNi4zNTc4IDMwLjk1MDcgMTYuNTEyNyAzMC44NTgxQzE2LjY2NzYgMzAuNzY1NSAxNi43OTQ2IDMwLjYzMjcgMTYuODgwMiAzMC40NzM4TDE2Ljk2MjIgMzAuMzE5OEMxOC43MzM1IDI3LjE2ODUgMjEuMDY5IDI0LjM2OTcgMjMuODUyMiAyMi4wNjI4QzI1LjE0MTkgMjAuOTQ4MiAyNi4xNzkyIDE5LjU3MTMgMjYuODk0NyAxOC4wMjQxQzI3LjYxMDIgMTYuNDc2OSAyNy45ODc2IDE0Ljc5NDkgMjguMDAxNiAxMy4wOTAzQzI4LjAxNTYgMTEuMzg1NyAyNy42NjU5IDkuNjk3NjcgMjYuOTc1OSA4LjEzODkxQzI2LjI4NTkgNi41ODAxNCAyNS4yNzE0IDUuMTg2NDQgMjQuMDAwMiA0LjA1MDc4Wk0xNi4wMDAyIDE3Ljk5OThDMTUuMDExMiAxNy45OTk4IDE0LjA0NDUgMTcuNzA2NSAxMy4yMjIzIDE3LjE1NzFDMTIuNDAwMSAxNi42MDc3IDExLjc1OTIgMTUuODI2OCAxMS4zODA4IDE0LjkxMzJDMTEuMDAyMyAxMy45OTk2IDEwLjkwMzMgMTIuOTk0MiAxMS4wOTYyIDEyLjAyNDNDMTEuMjg5MiAxMS4wNTQ0IDExLjc2NTQgMTAuMTYzNSAxMi40NjQ2IDkuNDY0MjRDMTMuMTYzOSA4Ljc2NDk4IDE0LjA1NDggOC4yODg3OCAxNS4wMjQ3IDguMDk1ODVDMTUuOTk0NiA3LjkwMjkyIDE2Ljk5OTkgOC4wMDE5NCAxNy45MTM2IDguMzgwMzhDMTguODI3MiA4Ljc1ODgyIDE5LjYwODEgOS4zOTk2OCAyMC4xNTc1IDEwLjIyMTlDMjAuNzA2OSAxMS4wNDQyIDIxLjAwMDIgMTIuMDEwOSAyMS4wMDAyIDEyLjk5OThDMjAuOTk4NiAxNC4zMjU0IDIwLjQ3MTMgMTUuNTk2MiAxOS41MzM5IDE2LjUzMzZDMTguNTk2NiAxNy40NzA5IDE3LjMyNTcgMTcuOTk4MiAxNi4wMDAyIDE3Ljk5OThaIiBmaWxsPSIjRkY0QTM1Ii8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZF81MjBfMTM2MTEiIHg9Ii0zIiB5PSIwIiB3aWR0aD0iMzgiIGhlaWdodD0iMzkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iNCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjUiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAwLjI5MDE5NiAwIDAgMCAwIDAuMjA3ODQzIDAgMCAwIDAuNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzUyMF8xMzYxMSIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd181MjBfMTM2MTEiIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg==",
  iconSize: [32, 32], 
});

const mapSelectedPinIcon = L.icon({
  iconUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzMiAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF81MjBfMTM1OTkpIj4KPHBhdGggZD0iTTI0LjAwMDIgNC4wNTA3OEMyMi44MTk1IDIuOTc0OTIgMjEuNDM2IDIuMTQ1NTkgMTkuOTMwNyAxLjYxMTRDMTguNDI1NCAxLjA3NzIxIDE2LjgyODYgMC44NDg5MTEgMTUuMjMzOSAwLjkzOTg5NEMxMy42MzkzIDEuMDMwODggMTIuMDc4OCAxLjQzOTMxIDEwLjY0NCAyLjE0MTI0QzkuMjA5MjMgMi44NDMxNyA3LjkyOTAzIDMuODI0NDggNi44Nzg0NSA1LjAyNzY0QzUuODI3ODcgNi4yMzA3OSA1LjAyODA2IDcuNjMxNTcgNC41MjU5MSA5LjE0Nzg3QzQuMDIzNzYgMTAuNjY0MiAzLjgyOTM4IDEyLjI2NTQgMy45NTQxNSAxMy44NTc4QzQuMDc4OTMgMTUuNDUwMiA0LjUyMDM2IDE3LjAwMTcgNS4yNTI1NiAxOC40MjEzQzUuOTg0NzYgMTkuODQwOCA2Ljk5Mjk5IDIxLjA5OTkgOC4yMTgxNSAyMi4xMjQ4QzExLjAxOTEgMjQuNDUzNSAxMy4zNTk0IDI3LjI4NTkgMTUuMTE4MiAzMC40NzU4QzE1LjIwNDEgMzAuNjM0NiAxNS4zMzE1IDMwLjc2NzIgMTUuNDg2OCAzMC44NTk1QzE1LjY0MjEgMzAuOTUxOCAxNS44MTk1IDMxLjAwMDIgMTYuMDAwMiAzMC45OTk4QzE2LjE4MDcgMzAuOTk5NyAxNi4zNTc4IDMwLjk1MDcgMTYuNTEyNyAzMC44NTgxQzE2LjY2NzYgMzAuNzY1NSAxNi43OTQ2IDMwLjYzMjcgMTYuODgwMiAzMC40NzM4TDE2Ljk2MjIgMzAuMzE5OEMxOC43MzM1IDI3LjE2ODUgMjEuMDY5IDI0LjM2OTcgMjMuODUyMiAyMi4wNjI4QzI1LjE0MTkgMjAuOTQ4MiAyNi4xNzkyIDE5LjU3MTMgMjYuODk0NyAxOC4wMjQxQzI3LjYxMDIgMTYuNDc2OSAyNy45ODc2IDE0Ljc5NDkgMjguMDAxNiAxMy4wOTAzQzI4LjAxNTYgMTEuMzg1NyAyNy42NjU5IDkuNjk3NjcgMjYuOTc1OSA4LjEzODkxQzI2LjI4NTkgNi41ODAxNCAyNS4yNzE0IDUuMTg2NDQgMjQuMDAwMiA0LjA1MDc4Wk0xNi4wMDAyIDE3Ljk5OThDMTUuMDExMiAxNy45OTk4IDE0LjA0NDUgMTcuNzA2NSAxMy4yMjIzIDE3LjE1NzFDMTIuNDAwMSAxNi42MDc3IDExLjc1OTIgMTUuODI2OCAxMS4zODA4IDE0LjkxMzJDMTEuMDAyMyAxMy45OTk2IDEwLjkwMzMgMTIuOTk0MiAxMS4wOTYyIDEyLjAyNDNDMTEuMjg5MiAxMS4wNTQ0IDExLjc2NTQgMTAuMTYzNSAxMi40NjQ2IDkuNDY0MjRDMTMuMTYzOSA4Ljc2NDk4IDE0LjA1NDggOC4yODg3OCAxNS4wMjQ3IDguMDk1ODVDMTUuOTk0NiA3LjkwMjkyIDE2Ljk5OTkgOC4wMDE5NCAxNy45MTM2IDguMzgwMzhDMTguODI3MiA4Ljc1ODgyIDE5LjYwODEgOS4zOTk2OCAyMC4xNTc1IDEwLjIyMTlDMjAuNzA2OSAxMS4wNDQyIDIxLjAwMDIgMTIuMDEwOSAyMS4wMDAyIDEyLjk5OThDMjAuOTk4NiAxNC4zMjU0IDIwLjQ3MTMgMTUuNTk2MiAxOS41MzM5IDE2LjUzMzZDMTguNTk2NiAxNy40NzA5IDE3LjMyNTcgMTcuOTk4MiAxNi4wMDAyIDE3Ljk5OThaIiBmaWxsPSIjMEY5MEQxIi8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZF81MjBfMTM1OTkiIHg9Ii0zIiB5PSIwIiB3aWR0aD0iMzgiIGhlaWdodD0iMzkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iNCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjUiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuMDU4ODIzNSAwIDAgMCAwIDAuNTY0NzA2IDAgMCAwIDAgMC44MTk2MDggMCAwIDAgMC41IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfNTIwXzEzNTk5Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzUyMF8xMzU5OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K",
  iconSize: [32, 32], 
});

L.tileLayer(
  "https://api.mapbox.com/styles/v1/walterdark/clbw5xvvk008u14sbzsctwk9n/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoid2FsdGVyZGFyayIsImEiOiJjbGJ2emd5dGUwMWVtM3JvNWpuZWJlZTVwIn0.2kN_AJ30ekV2o5hxFEnMnA",
  {
    maxZoom: 19,
    attribution: '',
  }
).addTo(map);

const MapMarkers = {
  MOSKOW: 1,
  MINSK: 2,
  ST_PETERSBURG: 3,
  KAZAN: 4,
  SAMARA: 5,
  UFA: 6,
  YEKATERINBURG: 7,
  OMSK: 8,
  NOVOSIBIRSK: 9,
  KRASNOYARSK: 10,
  ASTANA: 11,
  ALMATY: 12,
  TBILISI: 13,
}

const moskowMarker = L.marker([55.75658758002097, 37.61860401092944], {icon: mapPinIcon, id: MapMarkers.MOSKOW}).addTo(map).on('click', onMarkerClick);
const minskMarker = L.marker([53.90082641639457, 27.559586329781435], {icon: mapPinIcon, id: MapMarkers.MINSK}).addTo(map).on('click', onMarkerClick);
const stPetersburgMarker = L.marker([59.92881357197844, 30.361848106459156], {icon: mapPinIcon, id: MapMarkers.ST_PETERSBURG}).addTo(map).on('click', onMarkerClick);
const kazanMarker = L.marker([55.787934463291, 49.123359692358946], {icon: mapPinIcon, id: MapMarkers.KAZAN}).addTo(map).on('click', onMarkerClick);
const samaraMarker = L.marker([53.203030105139334, 50.16081727739677], {icon: mapPinIcon, id: MapMarkers.SAMARA}).addTo(map).on('click', onMarkerClick);
const ufaMarker = L.marker([54.73512988160078, 55.95637573330796], {icon: mapPinIcon, id: MapMarkers.UFA}).addTo(map).on('click', onMarkerClick);
const yekaterinburgMarker = L.marker([56.845991523546864, 60.66681414788481], {icon: mapPinIcon, id: MapMarkers.YEKATERINBURG}).addTo(map).on('click', onMarkerClick);
const omskMarker = L.marker([55.041523810486225, 73.32042879813376], {icon: mapPinIcon, id: MapMarkers.OMSK}).addTo(map).on('click', onMarkerClick);
const novosibirskMarker = L.marker([55.00261843624746, 82.85137672926386], {icon: mapPinIcon, id: MapMarkers.NOVOSIBIRSK}).addTo(map).on('click', onMarkerClick);
const krasnoyarskMarker = L.marker([56.01974283234465, 92.91036086803753], {icon: mapPinIcon, id: MapMarkers.KRASNOYARSK}).addTo(map).on('click', onMarkerClick);
const astanaMarker = L.marker([51.280829329244085, 71.49341882804161], {icon: mapPinIcon, id: MapMarkers.ASTANA}).addTo(map).on('click', onMarkerClick);
const almatyMarker = L.marker([43.223120628564914, 76.86725419344181], {icon: mapPinIcon, id: MapMarkers.ALMATY}).addTo(map).on('click', onMarkerClick);
const tbilisiMarker = L.marker([41.71802489002157, 44.838845966968925], {icon: mapPinIcon, id: MapMarkers.TBILISI}).addTo(map).on('click', onMarkerClick);

const mapPopup = document.querySelector('.js-map-popup');
const mapPopupTitle = mapPopup.querySelector('.js-map-popup-title');
const mapPopupList = mapPopup.querySelector('.js-map-popup-list');
const mapPopupCloseBtn = mapPopup.querySelector('.js-popup-close');

function onMarkerClick(e) {
  const markerId = e.target.options.id;
  resetMarkers();
  e.target.setIcon(mapSelectedPinIcon)
  resetPopupData();
  setPopUpData(mapData[markerId]);
  openMapPopup();
}

mapPopupCloseBtn.addEventListener('click', function(e) {
  e.preventDefault();
  closeMapPopup();
})

function resetMarkers() {
  map.eachLayer(function (layer) { 
    if(layer instanceof L.Marker ) {
      layer.setIcon(mapPinIcon)
    }
  });
}

function setPopUpData(data) {
  mapPopupTitle.innerHTML = data.title;
  data.locations.forEach(item => {
    console.log(item);
    mapPopupList.insertAdjacentHTML(`afterbegin`, `
      <li class="map-popup__item">
          <h6 class="map-popup__item-name">
              ${item.name}
          </h6>
          <p class="map-popup__item-date">
              ${item.date}
          </p>
          <p class="map-popup__item-place">
              ${item.place}
          </p>
          <p class="map-popup__item-street">
              ${item.street}
          </p>
      </li>
    `)
  })
}

function resetPopupData() {
  mapPopupTitle.innerHTML = '';
  mapPopupList.innerHTML = '';
}

function openMapPopup() {
  mapPopup.classList.add('active')
}

function closeMapPopup() {
  resetMarkers();
  mapPopup.classList.remove('active');
}