import { Entry } from 'hero-cli/decorator';

@Entry({
  filename: 'dashboard/home.html'
})
export class DecoratePage {

}

document.write('Hello World!');
