/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

$(document).ready(function () {
	$('.sidebar .folder-list .remove a.m-link').click(function (e) {
		var modalIs = '.' + $(this).attr('rel');

		$(modalIs + " .checklist").html(''); // Reset it
		$(modalIs + " .checklist").append('<li>' + $(this).data('confirm') + '</li>');
		$(modalIs + " input[name='group_name']").val($(this).data('group_name'));

		e.preventDefault();
	})
});