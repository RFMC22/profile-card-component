/// <reference types="cypress" />
import {Card} from '../../src/components'
import data from '../fixtures/data.json'

describe('<Card />', () => {
  beforeEach(() => {
    cy.mount(<Card />)
  });

  it('Card render', () => {
    cy.getBySel('card').should('be.visible')
  })

  it('Header render', () => {
    cy.getBySel('header').should('be.visible')
  })

  it('Imagen top render', () => {
    cy.getBySel('imgTop').should('be.visible')
  })

  it('Logo render', () => {
    cy.getBySel('logo').should('be.visible')
  })

  it('Name render', () => {
    cy.getBySel('name').should('contain.text', 'Victor Crest')
  })

  it('Age render', () => {
    cy.getBySel('age').should('contain.text', '26')
  })

  it('City render', () => {
    cy.getBySel('city').should('contain.text', 'London')
  })

  it('Footer render', () => {
    cy.getBySel('footer').should('be.visible')
  })

  it('Footer number data render', () => {
    cy.getBySel('number').each((item, index) => {
      const keys = Object.keys(data);
      cy.wrap(item).should('contain.text', data[keys[index]])
    })
  })

  it('Footer text data render', () => {
    cy.getBySel('text').each((item, index) => {
      const keys = Object.keys(data);
      const text = item.text().toLowerCase();
      cy.wrap(text).should('contain', keys[index])
    })
  })

})