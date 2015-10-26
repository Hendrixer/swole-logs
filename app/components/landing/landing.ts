import LandingModel from './landing-model';
const vm = new LandingModel();

export const loaded = (args: any) => {
  const page = args.object;
  page.addCssFile('landing.css');
  page.bindingContext = vm;
};
