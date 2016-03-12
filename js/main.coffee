---
---
$(document).on 'ready', ->

    ### Random Favorite Quote JS ###
    $('.site-footer #logo').on 'click', ->
        $quote = $('#js-quote')
        # Fade out anything that is there
        $quote.fadeOut 'slow', ->
            # Select random quote
            quotesLength = quotes.length
            randNum = Math.floor(Math.random()*quotesLength)
            quote = quotes[randNum]

            # Construct quote string
            quoteHTML = '<p>\"' + quote.text + '\"'
            if quote.attribution != ''
                quoteHTML += ' ~ <em>' + quote.attribution + '</em>'
            if quote.date != ''
                quoteHTML += ' ~ ' + quote.date
            quoteHTML += "</p>"

            # Insert quote and fade in
            $quote.html quoteHTML
            $quote.fadeIn 'slow'
        return
    return