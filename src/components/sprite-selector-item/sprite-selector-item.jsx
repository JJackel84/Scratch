const classNames = require('classnames');
const React = require('react');

const Box = require('../box/box.jsx');
const CostumeCanvas = require('../costume-canvas/costume-canvas.jsx');
const CloseButton = require('../close-button/close-button.jsx');
const styles = require('./sprite-selector-item.css');

const SpriteSelectorItem = props => (
    <Box
        className={classNames(
            props.className,
            styles.spriteSelectorItem,
            {
                [styles.isSelected]: props.selected
            }
        )}
        onClick={props.onClick}
    >
        {props.selected ? (
            <CloseButton
                className={styles.deleteButton}
                size={CloseButton.SIZE_SMALL}
                onClick={props.onDeleteButtonClick}
            />
        ) : null }
        {props.costumeURL ? (
            <CostumeCanvas
                className={styles.spriteImage}
                height={32}
                url={props.costumeURL}
                width={32}
            />
        ) : null}
        <div className={styles.spriteName}>{props.name}</div>
    </Box>
);

SpriteSelectorItem.propTypes = {
    className: React.PropTypes.string,
    costumeURL: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
    onDeleteButtonClick: React.PropTypes.func,
    selected: React.PropTypes.bool.isRequired
};

module.exports = SpriteSelectorItem;
