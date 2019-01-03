<?php
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

namespace EllisLab\Addons\Spam\Library;

/**
 * Spam Expectation
 */
class Expectation {

	public $samples = array();
	public $count = 0;
	public $mean = 0;
	public $variance = 0;

	/**
	 * Load the initial data and set the current mean/variance
	 *
	 * @param array An array of floats
	 * @access public
	 * @return void
	 */
	public function __construct($samples)
	{
		$this->samples = $samples;
		$this->count = count($samples);
		$this->mean = $this->mean();
		$this->variance = $this->variance();
	}

	/**
	 * Calculates and returns the sample mean
	 *
	 * @access public
	 * @return Return the sample mean.
	 */
	public function mean()
	{
		return array_sum($this->samples) / $this->count;
	}

	/**
     * Calculates and returns the variance
     * Note: sqrt(variance) == std deviation
	 *
	 * @access public
	 * @return Return the sample variance.
	 */
	public function variance()
	{
		$sum = 0;
		foreach($this->samples as $sample)
		{
			$sum += pow($sample - $this->mean, 2);
		}
		return sqrt($sum / $this->count);
	}

}

// EOF
