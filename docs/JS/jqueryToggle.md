# jQuery的show、hide、toggle方法

show、hide、toggle实现：

```JavaScript
jQuery.fn.extend( {
    show: function() {
        return showHide( this, true );
    },
    hide: function() {
        return showHide( this );
    },
    toggle: function( state ) {
        if ( typeof state === "boolean" ) {
            return state ? this.show() : this.hide();
        }

        return this.each( function() {
            if ( isHiddenWithinTree( this ) ) {
                jQuery( this ).show();
            } else {
                jQuery( this ).hide();
            }
        } );
    }
} );
//内部使用的函数
function showHide( elements, show ) {
    var display, elem,
        values = [],
        index = 0,
        length = elements.length;

    // Determine new display value for elements that need to change
    for ( ; index < length; index++ ) {
        elem = elements[ index ];
        if ( !elem.style ) {
            continue;
        }

        display = elem.style.display;
        if ( show ) {

            // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
            // check is required in this first loop unless we have a nonempty display value (either
            // inline or about-to-be-restored)
            if ( display === "none" ) {
                values[ index ] = dataPriv.get( elem, "display" ) || null;
                if ( !values[ index ] ) {
                    elem.style.display = "";
                }
            }
            if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
                values[ index ] = getDefaultDisplay( elem );
            }
        } else {
            if ( display !== "none" ) {
                values[ index ] = "none";

                // Remember what we're overwriting
                dataPriv.set( elem, "display", display );
            }
        }
    }

    // Set the display of the elements in a second loop to avoid constant reflow
    for ( index = 0; index < length; index++ ) {
        if ( values[ index ] != null ) {
            elements[ index ].style.display = values[ index ];
        }
    }

    return elements;
}
```
