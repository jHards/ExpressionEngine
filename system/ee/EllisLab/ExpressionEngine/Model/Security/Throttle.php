<?php
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

namespace EllisLab\ExpressionEngine\Model\Security;

use EllisLab\ExpressionEngine\Service\Model\Model;

/**
 * Throttle Model
 */
class Throttle extends Model {

	protected static $_primary_key = 'throttle_id';
	protected static $_table_name = 'throttle';

	protected static $_validation_rules = array(
		'ip_address' => 'ip_address'
	);

	protected $throttle_id;
	protected $ip_address;
	protected $last_activity;
	protected $hits;
	protected $locked_out;

}

// EOF
