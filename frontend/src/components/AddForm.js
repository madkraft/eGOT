import React, { Component } from "react";
import { Formik, Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Input,
  Box,
  Textarea,
  Button,
  FormErrorMessage
} from "@chakra-ui/core";

export class AddForm extends Component {
  initialValues = {
    ranges: !!this.props.mountainRanges[0]
      ? this.props.mountainRanges[0].name
      : ""
  };

  render() {
    const { mountainRanges, regions } = this.props;
    return (
      <Box w="50%">
        <Formik
          initialValues={this.initialValues}
          onSubmit={(values, actions) => {
            console.log("Submitted");
          }}
          render={props => (
            <form onSubmit={props.handleSubmit}>
              <Field
                name="ranges"
                // validate={validateName}
                render={({ field, form }) => {
                  console.log(form);
                  return (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel htmlFor="ranges">
                        Wybierz pasmo gorskie
                      </FormLabel>
                      <Select id="mountain">
                        {mountainRanges.map(range => {
                          return <option value={range.id}>{range.name}</option>;
                        })}
                      </Select>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  );
                }}
              />
              <Button mt={4} variantColor="teal" type="submit">
                Submit
              </Button>
            </form>
          )}
        />

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
