/**
 * @Author: Caven
 * @Date: 2020-05-07 19:28:33
 */

class ViewerApi {
  constructor(viewer) {
    this._viewer = viewer
  }

  get viewer() {
    return this._viewer
  }

  addBaseLayer() {
    let xyz = DC.ImageryLayerFactory.createXYZImageryLayer({
      url: 'http://100.100.142.135:1800/mapcache/gmaps/smgis_sd_dark@g_hd/{z}/{x}/{y}.png'
    })
    let hdlayer = new DC.ImageryLayerFactory.createXYZImageryLayer({
      url:'http://100.100.142.135:1800/mapcache/offline/sxsy/Mapnik/{z}/{x}/{y}.png'
    })
    this._viewer.addBaseLayer([xyz,hdlayer])
    this._viewer.compass.enable = true
    this.viewer.distanceLegend.enable = true
    this.viewer.locationBar.enable = true
    let layer = new DC.TilesetLayer('layer')
    this._viewer.addLayer(layer)
    let tileset = new DC.Tileset(
      'http://100.100.142.135:1800/mapcache/offline/building/tileset.json'
    )
    let style = new DC.TilesetStyle()
    style.color = {
    conditions: [
      ['true', 'rgb(32, 24, 255)'],
    ],
    }
    tileset.setStyle(style)
    //tileset.setHeight(0)
    layer.addOverlay(tileset)
    this._viewer.flyTo(tileset)
    return this
  }
}

export default ViewerApi
