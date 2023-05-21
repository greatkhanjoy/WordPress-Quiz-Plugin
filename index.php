<?php
/*
Plugin Name: Simple Quiz| Greatkhanjoy
Description: This is a Quiz plugin for Gutenberg editor.
Version: 1.0.0
Author: Greatkhanjoy
Author URI: https://greatkhanjoy.me/
Plugin URI: https://github.com/greatkhanjoy/WordPress-Quiz-Plugin/
License: GPL-2.0+
License URI: http://www.gnu.org/licenses/gpl-2.0.txt
*/

class Quiz_Plugin
{
    public function __construct()
    {
        // Add your initialization actions here
        add_action('init', array($this, 'enqueue_editor_assets'));
    }

    public function enqueue_editor_assets()
    {
        wp_register_style(
            'quizEditCss',
            plugin_dir_url(__FILE__) . './build/index.css'
        );
        wp_register_script(
            'quizEditJs',
            plugin_dir_url(__FILE__) . './build/index.js',
            array('wp-blocks', 'wp-element', 'wp-editor'),
            '1.0.0',
            true
        );

        register_block_type('greatkhanjoy/quiz', array(
            'editor_script' => 'quizEditJs',
            'editor_style' => 'quizEditCss',
            'render_callback' => array($this, 'theHtml')
        ));
    }

    function theHtml($attr)
    {
        if (!is_admin()) {
            wp_enqueue_script('quizFrontendJs', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
            wp_enqueue_style('quizFrontendCss', plugin_dir_url(__FILE__) . 'build/frontend.css');
        }
        ob_start(); ?>
        <div class="quiz-update-me">
            <pre style="display: none;"><?php echo wp_json_encode($attr) ?></pre>
        </div>
<?php return ob_get_clean();
    }
}

// Instantiate the plugin class
$my_quiz_plugin = new Quiz_Plugin();
