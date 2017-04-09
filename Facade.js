/**
 * Created by moustafa on 4/9/17.
 */
class AssetsReport {
    render() {
        console.log("AssetsReport Data");
    }
}
class LiabilitesReport {
    render() {
        console.log("LiabilitesReport Data");
    }
}
class UserFacade {
    constructor() {
        this.assetsReport = new AssetsReport();
        this.liabilitesReport = new LiabilitesReport();
    }
    renderAssetsReport() {
        this.assetsReport.render();
    }
    renderLiabilitesReport() {
        this.liabilitesReport.render();
    }
}
new UserFacade().renderAssetsReport();
new UserFacade().renderLiabilitesReport();
