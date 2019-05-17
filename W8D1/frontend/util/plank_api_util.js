export const fetchPlanks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/planks',
  })
);

export const createPlank = plankForm => (
  $.ajax({
    method: 'POST',
    url: 'api/planks',
    data: plankForm,
    contentType: false,
    processData: false
  })
);
