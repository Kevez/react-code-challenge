import React from 'react';
import SearchBar from '../components/searchBar/SearchBar';
import {create} from 'react-test-renderer';
import {mount} from 'enzyme';
import '../setupTests';

const mockCategories = [
  {id: 1, name: 'Foo'},
  {id: 2, name: 'Bar'},
  {id: 3, name: 'Baz'},
];

describe('the search bar component', () => {
  test('the initial state', () => {
    let tree = create(<SearchBar categories={mockCategories}/>);
    let instance = tree.getInstance();
    
    expect(instance.state.category_id).toBe(null);
    expect(instance.state.location).toBe("");
    expect(instance.state.category_id_error).toBe(false);
    expect(instance.state.location_error).toBe(false);
  });
  
  test('state location updates on input change', () => {
    const component = mount(<SearchBar categories={mockCategories} />);
    component.find('input').simulate('change', {
      target: {
        name: 'location',
        value: 'SW11'
      }
    });
    
    expect(component.state('location')).toBe('SW11');
  });
});