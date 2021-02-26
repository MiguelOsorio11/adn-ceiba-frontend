import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkTrabajoDeGrado= element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkCita = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));

    async clickBotonTrabajosDeGrado() {
        await this.linkTrabajoDeGrado.click();
    }

    async clickBotonCita() {
        await this.linkCita.click();
    }
}
