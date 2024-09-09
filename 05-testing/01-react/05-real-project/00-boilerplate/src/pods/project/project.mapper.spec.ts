import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapEmployeeSummaryFromApiToVm } from './project.mapper';

describe('mapEmployeeSummaryFromApiToVm', () => {
  it('should map employee summary from API to view model', () => {
    // Arrange
    const employeeSummary: apiModel.EmployeeSummary = {
      id: '1',
      employeeName: 'John Doe',
      isAssigned: true,
    };

    const expectedViewModel: viewModel.EmployeeSummary = {
      id: '1',
      employeeName: 'John Doe',
      isAssigned: true,
    };

    // Act
    const result = mapEmployeeSummaryFromApiToVm(employeeSummary);

    // Assert
    expect(result).toEqual(expectedViewModel);
  });

  it('should return an empty employee summary when input is undefined', () => {
    // Arrange
    const employeeSummary = undefined;

    // Act
    const result = mapEmployeeSummaryFromApiToVm(employeeSummary);

    // Assert
    expect(result).toEqual(null);
  });
});
