package resourcemanager

type options struct {
	applyPreProcessor applyPreProcessorFn
	tableConfig       TableConfig
	deleteSuccessMsg  string
	resourceType      string
}

type option func(*options)

func WithApplyPreProcessor(preProcessor applyPreProcessorFn) option {
	return func(o *options) {
		o.applyPreProcessor = preProcessor
	}
}

func WithDeleteSuccessMessage(deleteSuccessMssg string) option {
	return func(o *options) {
		o.deleteSuccessMsg = deleteSuccessMssg
	}
}

func WithTableConfig(tableConfig TableConfig) option {
	return func(o *options) {
		o.tableConfig = tableConfig
	}
}

func WithResourceType(resourceType string) option {
	return func(o *options) {
		o.resourceType = resourceType
	}
}
