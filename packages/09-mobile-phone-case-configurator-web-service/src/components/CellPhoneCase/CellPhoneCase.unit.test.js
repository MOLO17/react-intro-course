import React from 'react';
import renderer from 'react-test-renderer';

import CellPhoneCase from './CellPhoneCase';

describe('CellPhoneCase component', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <CellPhoneCase color="#ff0000" texture="DOTTED" text="Dummy text" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('CellPhoneCase color', () => {
  it('should be displayed correctly', () => {
    const color = '#ff0000';

    const component = renderer.create(<CellPhoneCase color={color} />);

    const caseBody = component.root.findByProps({
      className: 'cell-phone-case',
    });

    const { backgroundColor } = caseBody.props.style;

    expect(backgroundColor).toEqual(color);
  });
});

describe('CellPhoneCase texture', () => {
  describe('dotted texture', () => {
    it('should be displayed correctly', () => {
      const component = renderer.create(
        <CellPhoneCase color="#ff0000" texture="DOTTED" />,
      );

      const caseBody = component.root.findByProps({
        className: 'cell-phone-case',
      });

      const { backgroundImage } = caseBody.props.style;

      expect(backgroundImage).toEqual(`url('Dotted.svg')`);
    });
  });

  describe('checkered texture', () => {
    it('should be displayed correctly', () => {
      const component = renderer.create(
        <CellPhoneCase color="#ff0000" texture="CHECKERED" />,
      );

      const caseBody = component.root.findByProps({
        className: 'cell-phone-case',
      });

      const { backgroundImage } = caseBody.props.style;

      expect(backgroundImage).toEqual(`url('Checkered.svg')`);
    });
  });

  describe('striped texture', () => {
    it('should be displayed correctly', () => {
      const component = renderer.create(
        <CellPhoneCase color="#ff0000" texture="STRIPED" />,
      );

      const caseBody = component.root.findByProps({
        className: 'cell-phone-case',
      });

      const { backgroundImage } = caseBody.props.style;

      expect(backgroundImage).toEqual(`url('Striped.svg')`);
    });
  });

  describe('plain texture', () => {
    it('should be displayed correctly', () => {
      const component = renderer.create(
        <CellPhoneCase color="#ff0000" texture="NONE" />,
      );

      const caseBody = component.root.findByProps({
        className: 'cell-phone-case',
      });

      const { backgroundImage } = caseBody.props.style;

      expect(backgroundImage).toBe(undefined);
    });
  });

  describe('undefined texture', () => {
    it('should be displayed correctly', () => {
      const component = renderer.create(<CellPhoneCase color="#ff0000" />);

      const caseBody = component.root.findByProps({
        className: 'cell-phone-case',
      });

      const { backgroundImage } = caseBody.props.style;

      expect(backgroundImage).toBe(undefined);
    });
  });
});

describe('CellPhoneCase text', () => {
  it('should be inserted correctly', () => {
    const text = 'Dummy text';

    const component = renderer.create(
      <CellPhoneCase color="#ff0000" text={text} />,
    );

    const textNode = component.root.findByProps({
      children: text,
    });

    expect(textNode).toBeTruthy();
  });

  it('should be white if color is dark', () => {
    const text = 'Dummy text';

    const component = renderer.create(
      <CellPhoneCase color="#000000" text={text} />,
    );

    const textNode = component.root.findByProps({
      children: text,
    });

    const { color } = textNode.props.style;

    expect(color).toEqual('white');
  });

  it('should be black if color is light', () => {
    const text = 'Dummy text';

    const component = renderer.create(
      <CellPhoneCase color="#ffffff" text={text} />,
    );

    const textNode = component.root.findByProps({
      children: text,
    });

    const { color } = textNode.props.style;

    expect(color).toEqual('black');
  });
});
