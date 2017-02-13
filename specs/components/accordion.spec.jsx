import React from 'react';
import uniqueid from 'lodash.uniqueid';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Accordion from '../../src/components/accordion/accordion';

describe('An Accordion', () => {
  const theme = { accordion: uniqueid() };
  // const child = uniqueid();

  it('should have a accordion class.', () => {
    const wrapper = shallow(<Accordion />);
    expect(wrapper.hasClass(theme.accordion)).to.be.true;
  });

  // it('should be an <a> tag.', () => {
  //   const wrapper = shallow(<Accordion href={href} theme={theme} ></Accordion>);
  //   expect(wrapper.type()).to.equal('a');
  // });
  //
  // it('should render its children.', () => {
  //   const wrapper = shallow(<Accordion href={href} theme={theme} >{child}</Accordion>);
  //   expect(wrapper.contains(child)).to.be.true;
  // });
  //
  // describe('with an icon', () => {
  //   const variant = 'after';
  //   const icon = uniqueid();
  //
  //   it('should have a data-icon property with a value of the icon.', () => {
  //     const wrapper = shallow(<Accordion theme={theme} href={href} icon={icon} />);
  //     expect(wrapper.prop('data-icon')).to.equal(icon);
  //   });
  //
  //   describe('and a variant,', () => {
  //     theme[variant] = uniqueid();
  //
  //     it('should have a class with that variant', () => {
  //       const wrapper = shallow(<Accordion theme={theme} href={href} variant={variant} icon={icon} />);
  //       expect(wrapper.hasClass(theme[variant])).to.be.true;
  //     });
  //   });
  //
  // });
  //
  // describe('with a className attribute,', () => {
  //   const customClass = uniqueid();
  //   theme[customClass] = uniqueid();
  //
  //   it('should contain that class.', () => {
  //     const wrapper = shallow(<Accordion theme={theme} href={href} className={customClass} >{child}</Accordion>);
  //     expect(wrapper.hasClass(theme[customClass])).to.be.true;
  //   });
  // });
  //
  // describe('with a theme with mods,', () => {
  //   const theme = {
  //     accordion: uniqueid(),
  //     mod1: uniqueid(),
  //     mod2: uniqueid(),
  //   };
  //
  //   it('should support a single mod.', () => {
  //     const wrapper = shallow(<Accordion theme={theme} mod="mod1" href={href} />);
  //     expect(wrapper.hasClass(theme.mod1)).to.be.true;
  //   });
  //
  //   it('should support an array of mods.', () => {
  //     const wrapper = shallow(<Accordion theme={theme} mod={['mod1', 'mod2']} href={href} />);
  //     expect(wrapper.hasClass(theme.mod1)).to.be.true;
  //     expect(wrapper.hasClass(theme.mod2)).to.be.true;
  //   });
  // });

});
