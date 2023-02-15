class RootData {
  private _apiURL = process.env.API_URL;
  public socketURL = process.env.SOCKET_URL;

  get apiURL() {
    return this._apiURL;
  }
  set apiURL(apiURL) {
    this._apiURL = apiURL;
    if (apiURL.startsWith("http://")) {
      this.socketURL = `ws:${apiURL.replace(/http:|\/api$/g, "")}`;
    } else {
      this.socketURL = `wss:${apiURL.replace(/https:|\/api$/g, "")}`;
    }
  }
}

export default new RootData();
