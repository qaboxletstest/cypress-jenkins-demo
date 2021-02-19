describe('Frame Suite', () => {

    it('iFrame - Type in the body - jQuery Way', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('iframe#mce_0_ifr').within(($frame) => {
            const body = $frame.contents().find('body#tinymce')
            cy.wrap(body).clear().type('Test')
        })
    });


    it('Nested Frames - Fetch the text - jQuery Way', () => {
        // $('frame[src="/frame_top"]').contents().
        //find('frame[src="/frame_middle"]').contents().find('div#content').text()
        cy.visit('https://the-internet.herokuapp.com/nested_frames')
        cy.get('frame[src="/frame_top"]').within($frame => {
            cy.wrap($frame.contents().find('frame[src="/frame_middle"]')).within(fr => {
                cy.wrap(fr.contents().find('div#content')).should('have.text', 'MIDDLE')
            })
        })
    })

});