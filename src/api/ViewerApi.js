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
      url: 'http://100.100.151.221:1800/mapcache/gmaps/smgis_sd_dark@g_hd/{z}/{x}/{y}.png'
    })
    this._viewer.addBaseLayer(xyz)
    this._viewer.compass.enable = true
    let layer = new DC.TilesetLayer('layer')
    this._viewer.addLayer(layer)
    let tileset = new DC.Tileset(
      'http://100.100.151.221:1800/mapcache/offline/building/tileset.json'
    )
    //tileset.setHeight(0)
    layer.addOverlay(tileset)
    this._viewer.flyTo(tileset)
    return this
  }
}

export default ViewerApi
