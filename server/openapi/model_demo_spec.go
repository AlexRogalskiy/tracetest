/*
 * TraceTest
 *
 * OpenAPI definition for TraceTest endpoint and resources
 *
 * API version: 0.2.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

// DemoSpec - Represents the attributes of a Demonstration API.
type DemoSpec struct {
	Id string `json:"id,omitempty"`

	// String defining that this demo is a Open Telemetry Store demo.
	Type string `json:"type,omitempty"`

	// Name of the demo
	Name string `json:"name,omitempty"`

	// Flag telling if this API is enabled on Tracetest.
	Enabled bool `json:"enabled"`

	Pokeshop DemoPokeshop `json:"pokeshop,omitempty"`

	OpentelemetryStore DemoOpenTelemetryStore `json:"opentelemetryStore,omitempty"`
}

// AssertDemoSpecRequired checks if the required fields are not zero-ed
func AssertDemoSpecRequired(obj DemoSpec) error {
	elements := map[string]interface{}{
		"enabled": obj.Enabled,
	}
	for name, el := range elements {
		if isZero := IsZeroValue(el); isZero {
			return &RequiredError{Field: name}
		}
	}

	if err := AssertDemoPokeshopRequired(obj.Pokeshop); err != nil {
		return err
	}
	if err := AssertDemoOpenTelemetryStoreRequired(obj.OpentelemetryStore); err != nil {
		return err
	}
	return nil
}

// AssertRecurseDemoSpecRequired recursively checks if required fields are not zero-ed in a nested slice.
// Accepts only nested slice of DemoSpec (e.g. [][]DemoSpec), otherwise ErrTypeAssertionError is thrown.
func AssertRecurseDemoSpecRequired(objSlice interface{}) error {
	return AssertRecurseInterfaceRequired(objSlice, func(obj interface{}) error {
		aDemoSpec, ok := obj.(DemoSpec)
		if !ok {
			return ErrTypeAssertionError
		}
		return AssertDemoSpecRequired(aDemoSpec)
	})
}