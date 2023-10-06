FROM public.ecr.aws/lambda/python:3.10
# Copy function code
COPY ./backend ${LAMBDA_TASK_ROOT}
# Install the function's dependencies using file requirements.txt
# from your project folder.
COPY ./backend/requirements.txt .
RUN pip3 install -r requirements.txt -t "${LAMBDA_TASK_ROOT}" -U --no-cache-dir
# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "main.handler" ]