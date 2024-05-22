document.getElementById('saveButton').addEventListener('click', function () {
    // �������� ������� ���� � �����
    const currentDate = new Date().toLocaleString();
    // �������� ���������� ���� ��������
    const content = `<!-- Saved on: ${currentDate} -->\n${document.documentElement.outerHTML}`;
    // ������� ������ Blob ��� ���������� ������
    const blob = new Blob([content], { type: 'text/html' });
    // ������� ������ ��� ���������� �����
    const url = URL.createObjectURL(blob);
    // ������� ������ ��� �������� <a>, ����� ������������ ��� ������� ����
    const link = document.createElement('a');
    link.href = url;
    link.download = 'matrix_properties.html'; // ������ ��� ����� ��� ����������
    // ��������� ������ �� �������� � ��������� ������ �� ���
    document.body.appendChild(link);
    link.click();
    // ������� ������ �� DOM
    document.body.removeChild(link);
    // ����������� ������ URL
    URL.revokeObjectURL(url);
});

function downloadResults() {
    // ��������� GET-������ �� ������ ��� ���������� ����� JSON
    fetch('/download_results')
        .then(response => {
            // ��������� ������ ������
            if (!response.ok) {
                throw new Error('������ ���������� �����');
            }
            // ���������� ����� � ������� JSON
            return response.json();
        })
        .then(data => {
            // ��������� ������� ���� � �����
            data["downloaded_on"] = new Date().toLocaleString();
            // ������� ������ Blob ��� ���������� ������
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }); // ��������� �������������� � ���������
            // ������� ������ ��� ���������� �����
            const url = URL.createObjectURL(blob);
            // ������� ������ ��� �������� <a>, ����� ������������ ��� ������� ����
            const link = document.createElement('a');
            link.href = url;
            link.download = 'result.json'; // ������ ��� ����� ��� ����������
            // ��������� ������ �� �������� � ��������� ������ �� ���
            document.body.appendChild(link);
            link.click();
            // ������� ������ �� DOM
            document.body.removeChild(link);
            // ����������� ������ URL
            URL.revokeObjectURL(url);
        })
        .catch(error => {
            console.error('������:', error);
            alert('��������� ������ ��� ���������� �����');
        });
}