// @flow

import { PropTypes, createElement, Component } from 'react';
import { themr } from 'react-css-themr';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

class Link extends Component {

  static defaultProps = {
    className: '',
  };

  static propTypes = {
    className: PropTypes.string,

    href: PropTypes.string,

    variant: PropTypes.oneOf([
      'icon',
      'count',
    ]),

    mod: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),

    theme: PropTypes.shape({
      // Base
      link: PropTypes.string.isRequired,

      // Variants
      icon: PropTypes.string,
      count: PropTypes.string,

    }).isRequired,
  };

  link: HTMLElement;

  render() {
    const {
      children,
      className: propsClassName,
      href,
      theme,
      variant,
      count,
      icon,
      mod,
      ...rest
    } = this.props;

    const component = 'a';

    const className = classNames(
      theme.link,
      !!variant && theme[variant],
      resolveMods(theme, mod),
      propsClassName,
    );

    const elProps = {
      ...rest,
      className,
      ref: (el: HTMLElement) => { this.link = el; },
    };

    return createElement(component, elProps, children);
  }
}

export { Link };
export default themr('link')(Link);