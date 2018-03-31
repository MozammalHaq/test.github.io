<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'xenon');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'if+n12}J},,-[b aR5eXkW_4T`K;`>Lq H}X8xh-drRh&eM.>+AqAy&&DT!z5kJo');
define('SECURE_AUTH_KEY',  'pca|^$/tT9GY`G_eRUTGLX1p>eYKUT!tnw*^ 5!bH8~k4X^NFSe!&0n6D3}@EDE/');
define('LOGGED_IN_KEY',    'f:W%,{?Bk?05]^X!cK,.5^~&7Mqy@j;HHu9_:c)p7}9;E88^da!={!RlU~0i~vfd');
define('NONCE_KEY',        'WhTZr-&D$>q9(vYX2.2>-^g-S8:jq.kYn%DoQS2bE.FlQSYntZ&8%}D[t3&K>,]@');
define('AUTH_SALT',        ')$Y|s~5)DZ%1i}n(vqFXgsja&#fgodqb2mlN q4v89W*mEcs6V?Oln9V#QWedBZP');
define('SECURE_AUTH_SALT', '`j3@G&}L!A}3kz_?]0i}X#sEW&[Y1-PiFf*>+qFMi@H#@VP}-,hXIN9LsBI$ki<]');
define('LOGGED_IN_SALT',   'R96S5BO6}?v~c_HY&NcWK`G#6sB6ke-BT+-P`:m8O?LcPFS-`o6MOQ`5C.alCk[x');
define('NONCE_SALT',       '0p&RfC8[mVr.!:>#/AxY(XqV}}SNhP=>O%H;~(j)Cv]LPpz&UbzGvhyI(~dM-%Yv');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
