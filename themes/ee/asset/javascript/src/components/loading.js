"use strict";

/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

function Loading(props) {
  return React.createElement(
    "label",
    { className: "field-loading" },
    props.text ? props.text : EE.lang.loading,
    React.createElement("span", null)
  );
}