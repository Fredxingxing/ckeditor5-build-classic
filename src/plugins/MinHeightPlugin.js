import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class MinHeightPlugin extends Plugin {
  init() {
	const minHeight = this.editor.config.get('minHeight');
	if (minHeight) {
	  console.log('minHeight111', minHeight);
	  this.editor.ui.view.editable.extendTemplate({
		attributes: {
		  style: {
			minHeight: `${minHeight}px`,
		  }
		}
	  });
	}
  }
}
