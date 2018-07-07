import React from 'react';
import { shallow } from 'enzyme';
import NameView from '../client/components/ProfileGenViews/NameView';
import GenderView from '../client/components/ProfileGenViews/GenderView';
import RaceView from '../client/components/ProfileGenViews/RaceView';
import HeightView from '../client/components/ProfileGenViews/HeightView';
import AgeView from '../client/components/ProfileGenViews/AgeView';
import HairView from '../client/components/ProfileGenViews/HairView';
import EyeView from '../client/components/ProfileGenViews/EyeView';

describe('### PROFILE GEN VIEWS ###', () => {
  describe('___ <NAMEVIEW /> ___', () => {
    const mockName = jest.fn();
    const name = shallow(<NameView setName={e => mockName(e)} />);

    it('Should render an .input-wrapper', () => {
      expect(name.hasClass('input-wrapper')).toBe(true);
    });

    it('Should render an input with the .gen-profile-input and #profile-name', () => {
      expect(name.find('input').hasClass('gen-profile-input')).toBe(true);
      expect(name.find('#profile-name')).toHaveLength(1);
      expect(name.find('input')).toHaveLength(1);
    });

    it('Should render a label with .label', () => {
      expect(name.find('label')).toHaveLength(1);
      expect(name.find('label').hasClass('label')).toBe(true);
      expect(name.find('label').text()).toBe('Name');
    });

    it('Should have a method setName and activate when text is inputted', () => {
      expect(name.prop('setName'));
      name.find('.gen-profile-input').simulate('change', { target: { value: 'TEST' } });
      expect(mockName.mock.calls.length).toBe(1);
      console.log(mockName.mock.calls);
      expect(mockName.mock.calls[0][0].target.value).toBe('TEST');
    });
  });

  describe('___ <GENDERVIEW /> ___', () => {
    const mockGender = jest.fn();
    const gender = shallow(<GenderView setGender={e => mockGender(e)} />);

    it('Should render an .input-wrapper', () => {
      expect(gender.hasClass('input-wrapper')).toBe(true);
    });

    it('Should render an input with the .gen-profile-input and #profile-gender', () => {
      expect(gender.find('select').hasClass('gen-profile-input')).toBe(true);
      expect(gender.find('#profile-gender')).toHaveLength(1);
      expect(gender.find('select')).toHaveLength(1);
    });

    it('Should render a label with .label', () => {
      expect(gender.find('label')).toHaveLength(1);
      expect(gender.find('label').hasClass('select-label')).toBe(true);
      expect(gender.find('label').text()).toBe('Gender');
    });

    it('Should have a method setName and activate when text is inputted', () => {
      expect(gender.prop('setGender'));
      gender.find('.gen-profile-input').simulate('change', { target: { value: 'TEST' } });
      expect(mockGender.mock.calls.length).toBe(1);
      expect(mockGender.mock.calls[0][0].target.value).toBe('TEST');
    });
  });

  describe('___ <RACEVIEW /> ___', () => {
    const mockRace = jest.fn();
    const race = shallow(<RaceView setRace={e => mockRace(e)} />);
    it('Should render an .input-wrapper', () => {
      expect(race.hasClass('input-wrapper')).toBe(true);
    });

    it('Should render an input with the .gen-profile-input and #profile-race', () => {
      expect(race.find('select').hasClass('gen-profile-input')).toBe(true);
      expect(race.find('#race')).toHaveLength(1);
      expect(race.find('select')).toHaveLength(1);
    });

    it('Should render a label with .label', () => {
      expect(race.find('label')).toHaveLength(1);
      expect(race.find('label').hasClass('select-label')).toBe(true);
      expect(race.find('label').text()).toBe('Race');
    });

    it('Should have a method setName and activate when text is inputted', () => {
      expect(race.prop('setRace'));
      race.find('.gen-profile-input').simulate('change', { target: { value: 'TEST' } });
      expect(mockRace.mock.calls.length).toBe(1);
      expect(mockRace.mock.calls[0][0].target.value).toBe('TEST');
    });
  });

  describe('___ <HEIGHTVIEW /> ___', () => {
    const mockHeight = jest.fn();
    const height = shallow(<HeightView setHeight={e => mockHeight(e)} />);

    it('Should render an .input-wrapper', () => {
      expect(height.hasClass('input-wrapper')).toBe(true);
    });

    it('Should render an input with the .gen-profile-input and #profile-height', () => {
      expect(height.find('input').hasClass('gen-profile-input')).toBe(true);
      expect(height.find('#profile-height')).toHaveLength(1);
      expect(height.find('input')).toHaveLength(1);
    });

    it('Should render a label with .label', () => {
      expect(height.find('label')).toHaveLength(1);
      expect(height.find('label').hasClass('label')).toBe(true);
      expect(height.find('label').text()).toBe('Height');
    });

    it('Should have a method setHeight and activate when text is inputted', () => {
      expect(height.prop('setHeight'));
      height.find('.gen-profile-input').simulate('change', { target: { value: 'TEST' } });
      expect(mockHeight.mock.calls[0][0].target.value).toBe('TEST');
    });
  });

  describe('___ <AGEVIEW /> ___', () => {
    const mockAge = jest.fn();
    const age = shallow(<AgeView setAge={e => mockAge(e)} />);

    it('Should render an .input-wrapper', () => {
      expect(age.hasClass('input-wrapper')).toBe(true);
    });

    it('Should render an input with the .gen-profile-input and #profile-age', () => {
      expect(age.find('input').hasClass('gen-profile-input')).toBe(true);
      expect(age.find('#profile-age')).toHaveLength(1);
      expect(age.find('input')).toHaveLength(1);
    });

    it('Should render a label with .label', () => {
      expect(age.find('label')).toHaveLength(1);
      expect(age.find('label').hasClass('label')).toBe(true);
      expect(age.find('label').text()).toBe('Age');
    });

    it('Should have a method setAge and activate when text is inputted', () => {
      expect(age.prop('setAge'));
      age.find('.gen-profile-input').simulate('change', { target: { value: 'TEST' } });
      expect(mockAge.mock.calls[0][0].target.value).toBe('TEST');
    });
  });

  describe('___ <HAIRVIEW /> ___', () => {
    const mockHair = jest.fn();
    const hair = shallow(<HairView setHair={e => mockHair(e)} />);

    it('Should render an .input-wrapper', () => {
      expect(hair.hasClass('input-wrapper')).toBe(true);
    });

    it('Should render an input with the .gen-profile-input and #profile-hair', () => {
      expect(hair.find('input').hasClass('gen-profile-input')).toBe(true);
      expect(hair.find('#profile-hair')).toHaveLength(1);
      expect(hair.find('input')).toHaveLength(1);
    });

    it('Should render a label with .label', () => {
      expect(hair.find('label')).toHaveLength(1);
      expect(hair.find('label').hasClass('label')).toBe(true);
      expect(hair.find('label').text()).toBe('Hair Color');
    });

    it('Should have a method setHair and activate when text is inputted', () => {
      expect(hair.prop('setHair'));
      hair.find('.gen-profile-input').simulate('change', { target: { value: 'TEST' } });
      expect(mockHair.mock.calls.length).toBe(1);
      expect(mockHair.mock.calls[0][0].target.value).toBe('TEST');
    });
  });

  describe('___ <EYEVIEW /> ___', () => {
    const mockEye = jest.fn();
    const eye = shallow(<EyeView setEyes={e => mockEye(e)} />);

    it('Should render an .input-wrapper', () => {
      expect(eye.hasClass('input-wrapper')).toBe(true);
    });

    it('Should render an input with the .gen-profile-input and #profile-eye', () => {
      expect(eye.find('input').hasClass('gen-profile-input')).toBe(true);
      expect(eye.find('#profile-eye')).toHaveLength(1);
      expect(eye.find('input')).toHaveLength(1);
    });

    it('Should render a label with .label', () => {
      expect(eye.find('label')).toHaveLength(1);
      expect(eye.find('label').hasClass('label')).toBe(true);
      expect(eye.find('label').text()).toBe('Eye Color');
    });

    it('Should have a method setEye and activate when text is inputted', () => {
      expect(eye.prop('setEyes'));
      eye.find('.gen-profile-input').simulate('change', { target: { value: 'TEST' } });
      expect(mockEye.mock.calls.length).toBe(1);
      expect(mockEye.mock.calls[0][0].target.value).toBe('TEST');
    });
  });
});
