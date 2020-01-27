import React, { Component } from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Button,
  FormErrorMessage
} from "@chakra-ui/core";

const isFormValid = errors => {
  return Object.keys(errors).length === 0;
};

export class AddForm extends Component {
  state = {
    data: {
      startPoint: "",
      endPoint: ""
    },
    loading: false,
    errors: {}
  };

  initialValues = {
    ranges: !!this.props.mountainRanges[0]
      ? this.props.mountainRanges[0].name
      : ""
  };

  validate = data => {
    const errors = {};
    if (!data.startPoint) {
      errors.startPoint = "Can't be blank";
    }

    if (!data.endPoint) {
      errors.endPoint = "Can't be blank";
    }

    return errors;
  };

  onChange = event => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (isFormValid(errors)) {
      console.log("All good, submit form", this.state.data);
    } else {
      console.log("Errors");
    }
  };

  render() {
    const { mountainRanges, regions } = this.props;
    const { data, errors, loading } = this.state;

    return (
      <Box w="50%">
        <form onSubmit={this.onSubmit}>
          <FormControl isInvalid={!!errors.startPoint}>
            <FormLabel htmlFor="startPoint" isRequired>
              Punkt początkowy
            </FormLabel>
            <Input
              type="text"
              id="startPoint"
              name="startPoint"
              value={data.startPoint}
              onChange={this.onChange}
            />
            <FormErrorMessage>This field should not be empty</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.endPoint}>
            <FormLabel htmlFor="endPoint" isRequired>
              Punkt końcowy
            </FormLabel>
            <Input
              type="text"
              id="endPoint"
              name="endPoint"
              value={data.endPoint}
              onChange={this.onChange}
            />
            <FormErrorMessage>This field should not be empty</FormErrorMessage>
          </FormControl>
          <Button mt={4} variantColor="teal" type="submit">
            Submit
          </Button>
        </form>

        {/* <FormControl>
            <FormLabel isRequired htmlFor="mountain">
              Pasmo gorskie
            </FormLabel>
            <Select id="mountain" placeholder="Wybierz pasmo gorskie">
              {mountainRanges.map(range => {
                return <option value={range.id}>{range.name}</option>;
              })}
            </Select>
            <FormLabel isRequired htmlFor="region">
              Region
            </FormLabel>
            <Select id="region" placeholder="Wybierz region">
              {regions.map(region => {
                return <option value={region.id}>{region.name}</option>;
              })}
            </Select>
            <FormLabel isRequired htmlFor="mountain">
              Punkt początkowy
            </FormLabel>
            <Input />
            <FormLabel isRequired htmlFor="mountain">
              Punkt końcowy
            </FormLabel>
            <Input />
            <FormLabel isRequired htmlFor="mountain">
              Punkty GOT (początek -> koniec)
            </FormLabel>
            <Input />
            <FormLabel isRequired htmlFor="mountain">
              Punkty GOT (koniec -> początek)
            </FormLabel>
            <Input />
            <FormLabel htmlFor="mountain">Długosc odcinka</FormLabel>
            <Input placeholder="Dlugosc odcinka w km" />
            <FormLabel htmlFor="mountain">
              Podejscie (poczatek -> koniec)
            </FormLabel>
            <Input placeholder="Podejscie w metrach" />
            <FormLabel>Podejscie (koniec -> poczatek)</FormLabel>
            <Input placeholder="Podejscie w metrach" />
            <FormLabel>Opis odcinka</FormLabel>
            <Textarea />
          </FormControl> */}
      </Box>
    );
  }
}
